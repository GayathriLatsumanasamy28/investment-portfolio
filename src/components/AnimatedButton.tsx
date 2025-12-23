import { Pressable, Text, StyleSheet, Animated } from 'react-native';
import { useRef, useEffect } from 'react';
import { fadeIn } from '@/animations/fadeIn';

export default function AnimatedButton({ text, onPress }: any) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    fadeIn(opacity);
  }, []);

  return (
    <Animated.View style={{ opacity }}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2563EB',
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '600',
  },
});


