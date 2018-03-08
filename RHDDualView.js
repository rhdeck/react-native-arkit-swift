import { View, processColor, Text } from "react-native";
import PropTypes from "prop-types";
import React, { Component } from "react";
import RHDPrimaryView from "./RHDPrimaryView";
import RHDSecondaryView from "./RHDSecondaryView";
class RHDDualView extends Component {
  render() {
    return (
      <View
        style={{
          ...this.props.style,
          height: "100%",
          width: "100%",
          backgroundColor: "black"
        }}
      >
        <View
          style={{
            ...this.props.style,
            flexDirection: "row",
            paddingHorizontal: 100
          }}
        >
          <RHDPrimaryView
            {...this.props}
            style={{
              flex: 1
            }}
          />
          <RHDSecondaryView
            style={{
              flex: 1
            }}
          />
        </View>
      </View>
    );
  }
}
RHDDualView.propTypes = {
  ...RHDPrimaryView.propTypes,
  interPupillaryDistance: PropTypes.number
};
export default RHDDualView;
/*

       
        */