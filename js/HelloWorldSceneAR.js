"use strict";

import React, { Component } from "react";

import {
  ViroConstants,
  ViroBox,
  ViroAmbientLight,
  ViroNode,
  ViroImage,
  ViroARImageMarker,
  ViroARTrackingTargets,
  ViroARScene,
  ViroARSceneNavigator,
  ViroText
} from "react-viro";

export default class HelloWorldSceneAR extends Component {
  constructor() {
    super();

    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene>
        <ViroARImageMarker target={"targetOne"}>
          {/* <ViroBox position={[0, 0.25, 0]} scale={[0.5, 0.5, 0.5]} /> */}
          <ViroImage
            height={1}
            width={1}
            placeholderSource={require("./cup.jpg")}
            source={require("./cup.jpg")}
            rotation={[-90, 0, 0]}
          />
        </ViroARImageMarker>
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: "Hello?"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

// _handleButtonPress() {
//   return () => {
//     this.setState({
//       navigatorType: navigatorType
//     });
//   };
// }

ViroARTrackingTargets.createTargets({
  targetOne: {
    source: require("./cup.jpg"),
    orientation: "Up",
    physicalWidth: 0.25 // real world width in meters
  }
});

module.exports = HelloWorldSceneAR;
