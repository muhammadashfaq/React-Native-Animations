import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

const TranslateAnim = ({params}) => {
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 300,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      animation.setValue(0);
    });
  };

  const animatedStyles = {
    transform: [
      {
        translateY: animation,
      },
    ],
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
    width: 150,
    height: 150,
    backgroundColor: 'tomato',
  },
});

export default TranslateAnim;
