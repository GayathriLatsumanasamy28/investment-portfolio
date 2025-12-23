import { View, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import InputField from '../src/components/InputField';
import AnimatedButton from '../src/components/AnimatedButton';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>

      <InputField placeholder="Email (example@domain.com)" />
<InputField placeholder="Password (min 6 chars)" secureTextEntry />


      <AnimatedButton
        text="LOGIN"
        onPress={() => router.replace('/(tabs)')}
      />

      <Text
        style={styles.link}
        onPress={() => router.push('/register')}
      >
        New user? Register
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center' },
  title: { fontSize: 26, fontWeight: '700', marginBottom: 20 },
  link: { marginTop: 16, textAlign: 'center', color: '#2563EB' },
});
