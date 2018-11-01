import { PropTypes } from "prop-types";
import React, { Component } from "react";
import {
  NativeModules,
  NativeEventEmitter,
  requireNativeComponent,
  ViewPropTypes
} from "react-native";
//#region Code for object ARMonoViewManager
const NativeARMonoViewManager = NativeModules.ARMonoViewManager;
const doTap = async (x, y) => {
  return await NativeARMonoViewManager.doTap(x, y);
};
//#endregion
const NativeARMonoView = requireNativeComponent("ARMonoView", ARMonoView);
class ARMonoView extends Component {
  render() {
    return <NativeARMonoView {...this.props} />;
  }
}
ARMonoView.propTypes = {
  preview: PropTypes.bool,
  debugMode: PropTypes.bool,
  ...ViewPropTypes
};
const NativeARPrimaryView = requireNativeComponent(
  "ARPrimaryView",
  ARPrimaryView
);
class ARPrimaryView extends Component {
  render() {
    return <NativeARPrimaryView {...this.props} />;
  }
}
ARPrimaryView.propTypes = {
  interPupilaryDistance: PropTypes.number,
  holoOffsetY: PropTypes.number,
  holoOffsetZ: PropTypes.number,
  holoOffsetX: PropTypes.number,
  fieldOfView: PropTypes.number,
  ...ViewPropTypes
};
const NativeARProjectedView = requireNativeComponent(
  "ARProjectedView",
  ARProjectedView
);
class ARProjectedView extends Component {
  render() {
    return <NativeARProjectedView {...this.props} />;
  }
}
ARProjectedView.propTypes = {
  parentNode: PropTypes.string,
  ...ViewPropTypes
};
//#region Code for object ARSceneManager
const NativeARSceneManager = NativeModules.ARSceneManager;
const addNode = async (node, parentID) => {
  return await NativeARSceneManager.addNode(node, parentID);
};
const removeNode = async id => {
  return await NativeARSceneManager.removeNode(id);
};
const updateNode = async (forNode, newProps) => {
  return await NativeARSceneManager.updateNode(forNode, newProps);
};
const setBox = async (g, forNode) => {
  return await NativeARSceneManager.setBox(g, forNode);
};
const setCapsule = async (g, forNode) => {
  return await NativeARSceneManager.setCapsule(g, forNode);
};
const setCone = async (g, forNode) => {
  return await NativeARSceneManager.setCone(g, forNode);
};
const setCylinder = async (g, forNode) => {
  return await NativeARSceneManager.setCylinder(g, forNode);
};
const setPlane = async (g, forNode) => {
  return await NativeARSceneManager.setPlane(g, forNode);
};
const setPyramid = async (g, forNode) => {
  return await NativeARSceneManager.setPyramid(g, forNode);
};
const setSphere = async (g, forNode) => {
  return await NativeARSceneManager.setSphere(g, forNode);
};
const setText = async (g, forNode) => {
  return await NativeARSceneManager.setText(g, forNode);
};
const setTorus = async (g, forNode) => {
  return await NativeARSceneManager.setTorus(g, forNode);
};
const setTube = async (g, forNode) => {
  return await NativeARSceneManager.setTube(g, forNode);
};
const setShape = async (g, forNode) => {
  return await NativeARSceneManager.setShape(g, forNode);
};
const setGeometry = async (geometry, forNode) => {
  return await NativeARSceneManager.setGeometry(geometry, forNode);
};
const setLight = async (light, forNode) => {
  return await NativeARSceneManager.setLight(light, forNode);
};
const removeLight = async forNode => {
  return await NativeARSceneManager.removeLight(forNode);
};
const setMaterial = async (material, forNode, atPosition) => {
  return await NativeARSceneManager.setMaterial(material, forNode, atPosition);
};
const setMaterialProperty = async (
  json,
  propertyName,
  forMaterialAtPosition,
  forNode
) => {
  return await NativeARSceneManager.setMaterialProperty(
    json,
    propertyName,
    forMaterialAtPosition,
    forNode
  );
};
const removeGeometry = async forNode => {
  return await NativeARSceneManager.removeGeometry(forNode);
};
const removeMaterial = async (forNode, atPosition) => {
  return await NativeARSceneManager.removeMaterial(forNode, atPosition);
};
const setScene = async (forNode, sourcePath) => {
  return await NativeARSceneManager.setScene(forNode, sourcePath);
};
const setModel = async (forNode, sourcePath) => {
  return await NativeARSceneManager.setModel(forNode, sourcePath);
};
const addSKSceneReference = async scene => {
  return await NativeARSceneManager.addSKSceneReference(scene);
};
const addSKSceneByReference = async (
  sceneName,
  forNode,
  atPosition,
  withType
) => {
  return await NativeARSceneManager.addSKSceneByReference(
    sceneName,
    forNode,
    atPosition,
    withType
  );
};
const addSKScene = async (scene, forNode, atPosition, withType) => {
  return await NativeARSceneManager.addSKScene(
    scene,
    forNode,
    atPosition,
    withType
  );
};
const updateSKScene = async (scene, forNode, atPosition, withType) => {
  return await NativeARSceneManager.updateSKScene(
    scene,
    forNode,
    atPosition,
    withType
  );
};
const setSKLabelNode = async (node, toParent) => {
  return await NativeARSceneManager.setSKLabelNode(node, toParent);
};
const updateSKLabelNode = async json => {
  return await NativeARSceneManager.updateSKLabelNode(json);
};
const setSKVideoNode = async (node, toParent) => {
  return await NativeARSceneManager.setSKVideoNode(node, toParent);
};
const updateSKVideoNode = async json => {
  return await NativeARSceneManager.updateSKVideoNode(json);
};
const setSKNode = async (node, toParent) => {
  return await NativeARSceneManager.setSKNode(node, toParent);
};
const removeSKNode = async name => {
  return await NativeARSceneManager.removeSKNode(name);
};
const removeSKScene = async (forNode, atPosition, withType) => {
  return await NativeARSceneManager.removeSKScene(
    forNode,
    atPosition,
    withType
  );
};
const addSKLabelNode = async (node, toParent) => {
  return await NativeARSceneManager.addSKLabelNode(node, toParent);
};
const addSKNode = async (node, toParent) => {
  return await NativeARSceneManager.addSKNode(node, toParent);
};
const clear = async () => {
  return await NativeARSceneManager.clear();
};
const resume = async () => {
  return await NativeARSceneManager.resume();
};
const pause = async () => {
  return await NativeARSceneManager.pause();
};
const setAnimation = async (seconds, type) => {
  return await NativeARSceneManager.setAnimation(seconds, type);
};
const setAnimationDuration = async seconds => {
  return await NativeARSceneManager.setAnimationDuration(seconds);
};
const setAnimationType = async type => {
  return await NativeARSceneManager.setAnimationType(type);
};
const setPlaneDetection = async detectPlanes => {
  return await NativeARSceneManager.setPlaneDetection(detectPlanes);
};
const getAnchors = async () => {
  return await NativeARSceneManager.getAnchors();
};
const removeAnchor = async id => {
  return await NativeARSceneManager.removeAnchor(id);
};
const addRecognizerImage = async (url, name, width) => {
  return await NativeARSceneManager.addRecognizerImage(url, name, width);
};
const removeRecognizerImage = async name => {
  return await NativeARSceneManager.removeRecognizerImage(name);
};
const setImageDetection = async doDetect => {
  return await NativeARSceneManager.setImageDetection(doDetect);
};
const projectNode = async nodeID => {
  return await NativeARSceneManager.projectNode(nodeID);
};
const projectWorldPoint = async v => {
  return await NativeARSceneManager.projectWorldPoint(v);
};
const setPOVSensitivity = async newSensitivity => {
  return await NativeARSceneManager.setPOVSensitivity(newSensitivity);
};
const setPOVOrientationSensitivity = async newSensitivity => {
  return await NativeARSceneManager.setPOVOrientationSensitivity(
    newSensitivity
  );
};
const getPOV = async () => {
  return await NativeARSceneManager.getPOV();
};
const setWorldTracking = async trackingMode => {
  return await NativeARSceneManager.setWorldTracking(trackingMode);
};
const hitTestPlane = async (point, detectType) => {
  return await NativeARSceneManager.hitTestPlane(point, detectType);
};
//#endregion
//#region events for object ARSceneManager
var _getNativeARSceneManagerEventEmitter = null;
const getNativeARSceneManagerEventEmitter = () => {
  if (!_getNativeARSceneManagerEventEmitter)
    _getNativeARSceneManagerEventEmitter = new NativeEventEmitter(
      NativeARSceneManager
    );
  return _getNativeARSceneManagerEventEmitter;
};
const subscribeToARSessionError = cb => {
  return getNativeARSceneManagerEventEmitter().addListener(
    "ARSessionError",
    cb
  );
};
const subscribeToAREvent = cb => {
  return getNativeARSceneManagerEventEmitter().addListener("AREvent", cb);
};
const subscribeToARPlaneEvent = cb => {
  return getNativeARSceneManagerEventEmitter().addListener("ARPlaneEvent", cb);
};
const subscribeToARImageEvent = cb => {
  return getNativeARSceneManagerEventEmitter().addListener("ARImageEvent", cb);
};
const subscribeToARCameraState = cb => {
  return getNativeARSceneManagerEventEmitter().addListener("ARCameraState", cb);
};
const subscribeToARPositionChange = cb => {
  return getNativeARSceneManagerEventEmitter().addListener(
    "ARPositionChange",
    cb
  );
};
//#endregion
const NativeARSecondaryView = requireNativeComponent(
  "ARSecondaryView",
  ARSecondaryView
);
class ARSecondaryView extends Component {
  render() {
    return <NativeARSecondaryView {...this.props} />;
  }
}
ARSecondaryView.propTypes = {
  ...ViewPropTypes
};
//#region Event marshalling object
const RNSEvents = {
  ARSessionError: subscribeToARSessionError,
  AREvent: subscribeToAREvent,
  ARPlaneEvent: subscribeToARPlaneEvent,
  ARImageEvent: subscribeToARImageEvent,
  ARCameraState: subscribeToARCameraState,
  ARPositionChange: subscribeToARPositionChange
};
//#endregion
//#region Exports
export {
  doTap,
  ARMonoView,
  ARPrimaryView,
  ARProjectedView,
  addNode,
  removeNode,
  updateNode,
  setBox,
  setCapsule,
  setCone,
  setCylinder,
  setPlane,
  setPyramid,
  setSphere,
  setText,
  setTorus,
  setTube,
  setShape,
  setGeometry,
  setLight,
  removeLight,
  setMaterial,
  setMaterialProperty,
  removeGeometry,
  removeMaterial,
  setScene,
  setModel,
  addSKSceneReference,
  addSKSceneByReference,
  addSKScene,
  updateSKScene,
  setSKLabelNode,
  updateSKLabelNode,
  setSKVideoNode,
  updateSKVideoNode,
  setSKNode,
  removeSKNode,
  removeSKScene,
  addSKLabelNode,
  addSKNode,
  clear,
  resume,
  pause,
  setAnimation,
  setAnimationDuration,
  setAnimationType,
  setPlaneDetection,
  getAnchors,
  removeAnchor,
  addRecognizerImage,
  removeRecognizerImage,
  setImageDetection,
  projectNode,
  projectWorldPoint,
  setPOVSensitivity,
  setPOVOrientationSensitivity,
  getPOV,
  setWorldTracking,
  hitTestPlane,
  subscribeToARSessionError,
  subscribeToAREvent,
  subscribeToARPlaneEvent,
  subscribeToARImageEvent,
  subscribeToARCameraState,
  subscribeToARPositionChange,
  ARSecondaryView,
  RNSEvents
};
//#endregion
