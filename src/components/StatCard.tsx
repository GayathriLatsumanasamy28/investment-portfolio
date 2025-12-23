import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

type Props = {
  title: string;
  value: string;
};

export default function StatCard({ title, value }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 12,
    width: '48%',
  },
  title: {
    color: colors.textLight,
    fontSize: 13,
  },
  value: {
    color: colors.textDark,
    fontSize: 20,
    fontWeight: '700',
    marginTop: 4,
  },
});

