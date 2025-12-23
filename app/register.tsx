import { View, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import InputField from '@/components/InputField';
import AnimatedButton from '@/components/AnimatedButton';

export default function Register() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <InputField placeholder="Full Name (Gayathri L)" />
<InputField placeholder="Email (gayathri@email.com)" />
<InputField placeholder="Password (******)" secureTextEntry />
<InputField placeholder="Investment Goal (10L in 5 yrs)" />


      <AnimatedButton
        text="CREATE ACCOUNT"
        onPress={() => router.replace('/(tabs)')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: 'InterBold',
    marginBottom: 24,
  },
});

