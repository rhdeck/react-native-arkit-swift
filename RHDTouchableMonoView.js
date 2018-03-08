import { TouchableWithoutFeedback, NativeModules } from "react-native";
import React, { Component } from "react";
import RHDMonoView from "./RHDMonoView";
import RHDNode from "./components/RHDNode";
const RHDMonoViewNM = NativeModules.RHDMonoViewManager;
class RHDTouchableMonoView extends Component {
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={async ({ nativeEvent: { locationX, locationY } }) => {
          const out = await RHDMonoViewNM.doTap(locationX, locationY);
          if (out.nodes && out.nodes.length) {
            RHDNode.triggerProp(out.nodes[0], "onPress");
          }
        }}
        onPressIn={async ({ nativeEvent: { locationX, locationY } }) => {
          const out = await RHDMonoViewNM.doTap(locationX, locationY);
          if (out.nodes && out.nodes.length) {
            RHDNode.triggerProp(out.nodes[0], "onPressIn");
          }
        }}
        onPressOut={async ({ nativeEvent: { locationX, locationY } }) => {
          const out = await RHDMonoViewNM.doTap(locationX, locationY);
          if (out.nodes && out.nodes.length) {
            RHDNode.triggerProp(out.nodes[0], "onPressOut");
          }
        }}
      >
        <RHDMonoView {...this.props} />
      </TouchableWithoutFeedback>
    );
  }
}
RHDTouchableMonoView.propTypes = RHDMonoView.propTypes;
export default RHDTouchableMonoView;