import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

const BGColorsAnim = ({params}) => {
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1500,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 1500,
      }).start(() => {});
    });
  };

  //Interpolate only works with RGBA
  const boxInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(255,99,72)', 'rgb(99,71,255)'],
  });

  const colorInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(99,71,255)', 'rgb(255,99,72)'],
  });

  const boxAnimatedStyle = {
    backgroundColor: boxInterpolation,
  };

  const textAnimatedStyle = {
    color: colorInterpolation,
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, boxAnimatedStyle]}>
          <Animated.Text style={textAnimatedStyle}>Hi Animations</Animated.Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BGColorsAnim;
