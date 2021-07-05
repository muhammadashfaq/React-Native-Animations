import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

const WidthHeightAnim = ({params}) => {
  const [animation, setAnimation] = useState(new Animated.Value(150));

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 300,
      duration: 1500,
    }).start(() => {
      // Animated.timing(animation, {
      //   toValue: 1,
      //   duration: 1500,
      //   useNativeDriver: true,
      // }).start();
    });
  };

  const animatedStyles = {
    width: animation,
    height: animation,
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]}>
          <Text>
            This is really long text.This is really long text.This is really
            long text.This is really long text.This is really long text.This is
            really long text.This is really long text.This is really long text
          </Text>
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
    backgroundColor: 'tomato',
  },
});

export default WidthHeightAnim;
