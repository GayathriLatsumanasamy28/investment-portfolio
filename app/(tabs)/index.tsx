import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useMemo } from 'react';
import { colors } from '../../src/theme/colors';

/* ------------------ TEMP DATA (UI WORKING STATE) ------------------ */
const investments = [
  { id: 1, name: 'Stocks', amount: 50000, returns: 12 },
  { id: 2, name: 'Mutual Funds', amount: 30000, returns: 8 },
  { id: 3, name: 'Crypto', amount: 20000, returns: -5 },
];

/* ------------------ PROGRESS BAR COMPONENT ------------------ */
function ProgressBar({ percent }: { percent: number }) {
  return (
    <View style={styles.barContainer}>
      <View
        style={[
          styles.barFill,
          { width: `${Math.max(0, Math.min(percent, 100))}%` },
        ]}
      />
    </View>
  );
}

/* ------------------ DASHBOARD ------------------ */
export default function Dashboard() {
  const totalInvested = useMemo(
    () => investments.reduce((sum, i) => sum + i.amount, 0),
    []
  );

  const avgReturn = useMemo(
    () =>
      investments.length
        ? (
            investments.reduce((sum, i) => sum + i.returns, 0) /
            investments.length
          ).toFixed(1)
        : '0',
    []
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* HEADER */}
      <Text style={styles.header}>Dashboard</Text>

      {/* SUMMARY */}
      <View style={styles.summaryRow}>
        <SummaryCard label="Total Invested" value={`₹ ${totalInvested}`} />
        <SummaryCard label="Investments" value={investments.length.toString()} />
        <SummaryCard label="Avg Return" value={`${avgReturn}%`} />
      </View>

      {/* PERFORMANCE TREND */}
      <Section title="Performance Trend">
        {investments.map((item) => (
          <View key={item.id} style={styles.row}>
            <Text style={styles.rowLabel}>{item.name}</Text>
            <Text style={styles.rowValue}>{item.returns}%</Text>
            <ProgressBar percent={item.returns + 20} />
          </View>
        ))}
      </Section>

      {/* ASSET ALLOCATION */}
      <Section title="Asset Allocation">
        {investments.map((item) => {
          const percent = (item.amount / totalInvested) * 100;

          return (
            <View key={item.id} style={styles.row}>
              <Text style={styles.rowLabel}>
                {item.name} ({percent.toFixed(0)}%)
              </Text>
              <ProgressBar percent={percent} />
            </View>
          );
        })}
      </Section>
    </ScrollView>
  );
}

/* ------------------ REUSABLE COMPONENTS ------------------ */
function SummaryCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <View style={styles.summaryCard}>
      <Text style={styles.summaryLabel}>{label}</Text>
      <Text style={styles.summaryValue}>{value}</Text>
    </View>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

/* ------------------ STYLES ------------------ */
const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.background,
  },

  header: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.textDark,
    marginBottom: 16,
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },

  summaryCard: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 14,
    padding: 14,
    marginHorizontal: 4,
    alignItems: 'center',
  },

  summaryLabel: {
    fontSize: 13,
    color: colors.textLight,
  },

  summaryValue: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textDark,
    marginTop: 6,
  },

  section: {
    marginBottom: 24,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: colors.textDark,
  },

  row: {
    marginBottom: 12,
  },

  rowLabel: {
    fontSize: 14,
    color: colors.textDark,
    marginBottom: 4,
  },

  rowValue: {
    fontSize: 12,
    color: colors.textLight,
    marginBottom: 4,
  },

  barContainer: {
    height: 10,
    backgroundColor: '#E5E7EB',
    borderRadius: 6,
    overflow: 'hidden',
  },

  barFill: {
    height: '100%',
    backgroundColor: colors.success,
  },
});
