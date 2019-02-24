import { TouchableWithoutFeedback } from "react-native";
import React from "react";
import ARMonoView from "./ARMonoView";
import { ARTouchProvider } from "./ARTouchProvider";
const ARTouchableMonoView = props => (
  <ARTouchProvider>
    {({ triggerAtLocation }) => (
      <TouchableWithoutFeedback
        onPress={({ nativeEvent: { locationX, locationY } }) => {
          if (triggerAtLocation)
            triggerAtLocation("onPress", locationX, locationY);
        }}
        onPressIn={({ nativeEvent: { locationX, locationY } }) => {
          if (triggerAtLocation)
            triggerAtLocation("onPressIn", locationX, locationY);
        }}
        onPressOut={({ nativeEvent: { locationX, locationY } }) => {
          if (triggerAtLocation)
            triggerAtLocation("onPressOut", locationX, locationY);
        }}
      >
        <ARMonoView {...props} />
      </TouchableWithoutFeedback>
    )}
  </ARTouchProvider>
);
ARTouchableMonoView.propTypes = ARMonoView.propTypes;
export default ARTouchableMonoView;
