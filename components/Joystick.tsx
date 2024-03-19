import React from 'react';
import { View, PanResponder, StyleSheet } from 'react-native';

const Joystick = ({ onMove }) => {
  const panResponder = React.useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gestureState) => {
          const { dx, dy } = gestureState;
          onMove({ x: dx, y: dy });
        },
        onPanResponderRelease: () => {
          onMove({ x: 0, y: 0 });
        },
      }),
    [onMove]
  );

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <View style={styles.knob} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  knob: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'black',
  },
});

export default Joystick;