import { View, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function Landing() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Investment Portfolio</Text>
      <Text style={styles.subtitle}>
        Track, manage and grow your investments
      </Text>

      <Text style={styles.link} onPress={() => router.push('/login')}>
        Get Started
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 16,
    color: '#64748B',
    marginTop: 10,
    textAlign: 'center',
  },
  link: {
    marginTop: 24,
    fontSize: 16,
    color: '#2563EB',
    fontWeight: '600',
  },
});
