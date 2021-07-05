import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

const WidthHeightPercAnim = ({params}) => {
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

  const widthInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['20%', '50%'],
  });

  const heightInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['20%', '30%'],
  });

  const boxAnimatedStyle = {
    width: widthInterpolate,
    height: heightInterpolate,
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, boxAnimatedStyle]}>
          <Animated.Text>Hi Animations</Animated.Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'tomato',
  },
});

export default WidthHeightPercAnim;
