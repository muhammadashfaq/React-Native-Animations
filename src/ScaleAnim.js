import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

const ScaleAnim = ({params}) => {
  const [animation, setAnimation] = useState(new Animated.Value(1));

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: -2,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }).start();
    });
  };

  const animatedStyles = {
    transform: [
      {
        scaleY: animation,
      },
    ],
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]}>
          <Text>This side forward</Text>
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
    backgroundColor: 'tomato',
  },
});

export default ScaleAnim;
