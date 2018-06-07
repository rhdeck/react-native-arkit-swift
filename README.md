# react-reality

A React-based way of interacting with Augmented Reality. Make the world your provider

Currently IOS-Only

# Primitives

## Views

### ARMonoView

### ARTouchableMonoView

## Providers

### ARSessionProvider

### ARPositionProvider

### ARTouchProvider

### ARTrackingProvider

### ARAnimatedProvider

## Consumers

### ARTrackingConsumer

## Nodes

### ARNode

## Geometries

### ARBox

### ARCapsule

### ARCylinder

### ARPlane

### ARPyramid

### ARSphere

### ARText

### ARTorus

### ARTube

## Models

### ARScene

### ARModel

## Materials

### ARMaterial

### ARMaterials

### ARMaterialProperty

## Sprites

### ARSKScene

### ARSKLabel

# Sample

```jsx
import React, { Component, Children } from "react";
import { AppRegistry, View, Text, processColor } from "react-native";
import {
  ARTouchableMonoView,
  ARPlane,
  ARNode,
  ARBox,
  ARMaterial,
  ARMaterials,
  ARMaterialProperty,
  ARText
} from "react-reality";
export default class ARTest extends Component {
  state = {
    showPreview: true,
    fatColor: "blue",
    tallColor: "purple"
  };
  render() {
    return (
      <ARTouchableMonoView style={{ flex: 1 }} debug>
        <ARNode
          position={{ x: 1, y: 1, z: -5 }}
          onPressIn={() => {
            this.setState({ fatColor: "green" });
          }}
          onPressOut={() => {
            this.setState({ fatColor: "blue" });
          }}
        >
          <ARBox width={2} height={0.5} length={2} chamfer={0}>
            <ARMaterials roughness={0.5} metalness={0.2}>
              <ARMaterialProperty
                id="diffuse"
                color={processColor(this.state.fatColor)}
              />
            </ARMaterials>
          </ARBox>
          <ARNode
            position={{ x: 0.4, y: 3, z: 0 }}
            eulerAngles={{ x: 0.5, y: 0.2, z: 0 }}
            onPress={() => {
              this.setState(({ tallColor }) => {
                return {
                  tallColor: tallColor == "yellow" ? "purple" : "yellow"
                };
              });
            }}
          >
            <ARBox width={0.5} height={2} length={0.5} chamfer={0}>
              <ARMaterial index={0}>
                <ARMaterialProperty
                  id="diffuse"
                  color={processColor(this.state.tallColor)}
                />
              </ARMaterial>
              <ARMaterial index={1}>
                <ARMaterialProperty
                  id="diffuse"
                  color={processColor(this.state.tallColor)}
                />
              </ARMaterial>
              <ARMaterial index={2}>
                <ARMaterialProperty
                  id="diffuse"
                  color={processColor("green")}
                />
              </ARMaterial>
              <ARMaterial index={3}>
                <ARMaterialProperty
                  id="diffuse"
                  color={processColor("green")}
                />
              </ARMaterial>
              <ARMaterial index={4}>
                <ARMaterialProperty id="diffuse" color={processColor("red")} />
              </ARMaterial>
              <ARMaterial index={5}>
                <ARMaterialProperty id="diffuse" color={processColor("red")} />
              </ARMaterial>
            </ARBox>
            <ARNode position={{ x: 1, y: 1, z: 1 }}>
              <ARText text="hello" font={{ size: 0.5 }} />
            </ARNode>
          </ARNode>
        </ARNode>
      </ARTouchableMonoView>
    );
  }
}
```

# Important Credit-Where-Credit-Is-Due Note

The idea for this package was as a Swift port of [react-native-arkit](https://github.com/HippoAR/react-native-arkit), a cool project written in Objective-C, which is not a cool language. Major props to @macrozone for a heck of a lot of work.

Also the headset view uses ideas from [iOS-ARKit-Headset-View](https://github.com/hanleyweng/iOS-ARKit-Headset-View) which is a cool Swift-first project

And of course the best headset is [Holokit](https://holokit.io) from Amber Garage, who gave a talk at ARiA in January that was my inspiration for getting headset view going in the first place!
