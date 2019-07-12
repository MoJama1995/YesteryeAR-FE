import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const Hello = () => {
  return (
    <View>
      <Text style={hellostyles.buttonText}>Hello</Text>

      {/* <Button
        onPress={onPressLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      /> */}
    </View>
  );
};

var hellostyles = StyleSheet.create({
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20
  }
});

export default Hello;
