import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function Header({ title }: { title: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  text: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.textDark,
  },
});

