import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { colors } from '../../src/theme/colors';
import { useInvestments } from '../../src/context/InvestmentContext';


export default function Portfolio() {

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Portfolio</Text>

      <View style={styles.emptyBox}>
        <Text style={styles.emptyTitle}>No Investments Found</Text>
        <Text style={styles.emptyText}>
          You haven't added any investments yet.
          Start by adding your first investment to track performance.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/(tabs)/add-investment')}
        >
          <Text style={styles.buttonText}>Add Investment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.textDark,
    marginBottom: 20,
  },
  emptyBox: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textDark,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    color: colors.textLight,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: colors.success,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});


