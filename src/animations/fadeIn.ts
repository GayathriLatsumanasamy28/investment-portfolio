import { Animated } from 'react-native';

export const fadeIn = (value: Animated.Value, duration = 600) => {
  Animated.timing(value, {
    toValue: 1,
    duration,
    useNativeDriver: true,
  }).start();
};
