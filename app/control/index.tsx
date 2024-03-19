import Joystick from "@/components/Joystick";
import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
const ControlScreen = () => {
  const [throttle, setThrottle] = useState(1150);
  const [movement, setMovement] = useState({ x: 0, y: 0 });
  const [isStarted, setIsStarted] = useState(false);

  const handleThrottleChange = (value) => {
    setThrottle(value);
    // Send throttle command to drone using droneIP
  };

  const handleMovementChange = ({ x, y }) => {
    setMovement({ x, y });
    // Send movement command to drone using droneIP
  };

  const handleStartStop = () => {
    setIsStarted(!isStarted);
    // Send start/stop command to drone using droneIP
  };

  return (
    <View style={styles.container}>
      <Slider
        style={styles.slider}
        value={throttle}
        onValueChange={handleThrottleChange}
        minimumValue={1150}
        maximumValue={1800}
      />
      <Text>Throttle: {parseInt(throttle)}</Text>

      <Joystick onMove={handleMovementChange} />
      <Text>
        Movement: {movement.x}, {movement.y}
      </Text>

      <Button title={isStarted ? "Stop" : "Start"} onPress={handleStartStop} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slider: {
    width: "80%",
    marginBottom: 20,
  },
});

export default ControlScreen;
