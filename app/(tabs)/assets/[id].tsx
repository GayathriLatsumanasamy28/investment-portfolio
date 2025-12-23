import { View, Text, StyleSheet } from 'react-native';
import { colors } from '@/theme/colors';

type Asset = {
  id: string;
  name: string;
  totalValue: number;
  allocation: number;
};

export default function AssetsScreen() {
  const assets: Asset[] = [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ASSETS</Text>

      {assets.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>No Assets Yet</Text>
          <Text style={styles.emptySubtitle}>
            Add investments to view asset allocation.
          </Text>
        </View>
      ) : (
        assets.map(asset => (
          <View key={asset.id} style={styles.card}>
            <View>
              <Text style={styles.assetName}>{asset.name}</Text>
              <Text style={styles.assetAllocation}>
                {asset.allocation}% of portfolio
              </Text>
            </View>

            <Text style={styles.assetValue}>
              ₹{asset.totalValue}
            </Text>
          </View>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.textDark,
    marginBottom: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textDark,
  },
  emptySubtitle: {
    marginTop: 6,
    fontSize: 14,
    color: colors.textLight,
    textAlign: 'center',
  },
  card: {
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  assetName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textDark,
  },
  assetAllocation: {
    fontSize: 13,
    color: colors.textLight,
    marginTop: 4,
  },
  assetValue: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.success,
  },
});

