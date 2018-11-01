import React, { Component, Children } from "react";
import { processColor } from "react-native";
import {
  removeSKNode,
  setSKLabelNode,
  updateSKLabelNode
} from "../RNSwiftBridge";
import PropTypes from "prop-types";
import pickBy from "lodash/pickBy";
import UUID from "uuid/v4";
import { ARSKNodeProvider, ARSKNodeConsumer } from "./ARSKScene";
class ARBaseSKLabel extends Component {
  state = {
    identifier: UUID(),
    updateState: "doMount"
  };
  constructor(props) {
    super(props);
    this.state.providerValue = { SKNodeID: this.state.identifier };
  }
  async nativeUpdate() {
    if (this.state.updateState == "doMount") {
      this.setState({ updateState: "Mounting" });
      try {
        const label = {
          ...propFilter(this.props),
          name: this.state.identifier
        };
        const result = await setSKLabelNode(label, this.props.parentSKNode);
        this.setState(({ updateState }) => {
          return { updateState: updateState == "donext" ? "do" : "done" };
        });
      } catch (e) {
        this.setState({ updateState: "doMount" });
      }
    } else if (this.state.updateState == "do") {
      this.setState({ updateState: "doing" });
      try {
        const label = {
          ...propFilter(this.props),
          name: this.state.identifier
        };
        const result = await updateSKLabelNode(label);
        this.setState(({ updateState }) => {
          return { updateState: updateState == "donext" ? "do" : "done" };
        });
      } catch (e) {
        this.setState({ updateState: "do" });
      }
    }
  }
  componentDidMount() {
    this.nativeUpdate();
  }
  componentDidUpdate() {
    this.nativeUpdate();
  }
  render() {
    if (["doMount", "Mounting"].indexOf(this.state.updateState) > -1)
      return null;
    if (!this.props.children) return null;
    return (
      <ARSKNodeProvider value={this.state.providerValue}>
        {this.props.children}
      </ARSKNodeProvider>
    );
  }
  componentWillUnmount() {
    const result = removeSKNode(this.state.identifier);
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    var ret = prevState;
    if (propDiff(nextProps, prevState.SKProps)) {
      ret.SKProps = propFilter(nextProps);
      if (["doMount", "Mounting"].indexOf(prevState.updateState) == -1) {
        ret.updateState = prevState.updateState == "doing" ? "donext" : "do";
      }
    }
    return ret;
  }
}
ARBaseSKLabel.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }),
  parentSKNode: PropTypes.string,
  text: PropTypes.string,
  id: PropTypes.string,
  fontName: PropTypes.string,
  fontSize: PropTypes.number,
  fontColor: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // Note this requires a preprocessed color
  width: PropTypes.number,
  horizontalAlignment: PropTypes.string,
  verticalAlignment: PropTypes.string,
  allowScaling: PropTypes.bool,
  lineBreak: PropTypes.string,
  lines: PropTypes.number
};

const SKLabelKeys = Object.keys(ARBaseSKLabel.propTypes);
const ARSKLabel = props => {
  return (
    <ARSKNodeConsumer>
      {({ SKNodeID, height, width }) => {
        return (
          <ARBaseSKLabel
            height={height}
            width={width}
            {...props}
            parentSKNode={SKNodeID}
          />
        );
      }}
    </ARSKNodeConsumer>
  );
};
ARSKLabel.defaultProps = {
  allowScaling: true
};

const propFilter = props => {
  const temp = {
    ...pickBy(props, (v, k) => SKLabelKeys.indexOf(k) > -1)
  };
  if (typeof temp.fontColor == "string")
    temp.fontColor = processColor(temp.fontColor);
  return temp;
};

const propDiff = (a, b) => {
  if (a === b) return false;
  if (a & !b || !a & b) {
    return true;
  }
  const af = propFilter(a);
  const bf = propFilter(b);

  const afk = Object.keys(af);
  const bfk = Object.keys(bf);
  if (afk.length != bfk.length) {
    return true;
  }
  if (
    afk.filter(k => {
      return bfk.indexOf(k) === -1;
    }).length
  ) {
    return true;
  }
  if (
    afk.filter(k => {
      const t1 = bf[k] == af[k];
      if (t1) return false;
      if (typeof bf[k] === "object") {
        return JSON.stringify(bf[k]) != JSON.stringify(af[k]);
      } else {
        return true;
      }
    }).length
  ) {
    return true;
  }
};

ARSKLabel.propTypes = { ...ARBaseSKLabel.propTypes };
export { ARSKLabel, ARSKNodeConsumer };
export default ARSKLabel;
