import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

const AbosoluteAnim = ({params}) => {
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 40,
      duration: 1500,
    }).start(() => {});
  };

  const animatedStyles = {
    top: animation,
    left: animation,
    right: animation,
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]} />
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
    position: 'absolute',
    top: 0,
    left: 0,
    // width: 150,
    height: 150,
    backgroundColor: 'tomato',
  },
});

export default AbosoluteAnim;
