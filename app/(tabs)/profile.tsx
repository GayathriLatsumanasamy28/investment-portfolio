import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors } from '@/theme/colors';
import { useInvestments } from '@/context/InvestmentContext';


export default function ProfileScreen() {
  // Temporary static data (will come from backend later)
  const user = {
    name: 'Gayathri',
    email: 'gayathri@example.com',
    joined: 'March 2025',
  };

  const { investments } = useInvestments();

const totalValue = investments.reduce(
  (s, i) => s + i.amount,
  0
);


  return (
    <ScrollView style={styles.container}>
      {/* USER CARD */}
      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {user.name.charAt(0)}
          </Text>
        </View>

        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
        <Text style={styles.joined}>Member since {user.joined}</Text>
      </View>

      {/* ACCOUNT SUMMARY */}
      <Text style={styles.sectionTitle}>Account Summary</Text>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
         <Text style={styles.statValue}>{investments.length}</Text>
          <Text style={styles.statLabel}>Investments</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statValue}>{investments.length}</Text>
          <Text style={styles.statLabel}>Assets</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statValue}>₹{totalValue}</Text>
          <Text style={styles.statLabel}>Portfolio Value</Text>
        </View>
      </View>

      {/* RECENT ACTIVITY */}
      <Text style={styles.sectionTitle}>Recent Activity</Text>

      <View style={styles.activityCard}>
        <Text style={styles.activityText}>
          No recent activity yet.
        </Text>
        <Text style={styles.activitySubText}>
          Your investment actions will appear here.
        </Text>
      </View>

      {/* ACTIONS */}
      <Text style={styles.sectionTitle}>Account</Text>

      <View style={styles.actionCard}>
        <Text style={styles.actionText}>Edit Profile</Text>
      </View>

      <View style={styles.actionCard}>
        <Text style={[styles.actionText, styles.logout]}>
          Logout
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },

  profileCard: {
    backgroundColor: colors.card,
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 24,
  },

  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.success,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  avatarText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
  },

  name: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.textDark,
  },

  email: {
    marginTop: 4,
    fontSize: 14,
    color: colors.textLight,
  },

  joined: {
    marginTop: 6,
    fontSize: 12,
    color: colors.textLight,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textDark,
    marginBottom: 12,
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },

  statCard: {
    backgroundColor: colors.card,
    flex: 1,
    marginHorizontal: 4,
    padding: 14,
    borderRadius: 14,
    alignItems: 'center',
  },

  statValue: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textDark,
  },

  statLabel: {
    marginTop: 4,
    fontSize: 12,
    color: colors.textLight,
    textAlign: 'center',
  },

  activityCard: {
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 14,
    marginBottom: 24,
  },

  activityText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textDark,
  },

  activitySubText: {
    marginTop: 6,
    fontSize: 13,
    color: colors.textLight,
  },

  actionCard: {
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
  },

  actionText: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.textDark,
  },

  logout: {
    color: '#DC2626',
  },
});
