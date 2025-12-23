import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import { colors } from '../../src/theme/colors';
import { useInvestments } from '../../src/context/InvestmentContext';


type Investment = {
  id: number;
  name: string;
  type: string;
  amount: string;
  returns: string;
};

export default function AddInvestment() {
  const [rows, setRows] = useState<Investment[]>([
    {
      id: 1,
      name: '',
      type: '',
      amount: '',
      returns: '',
    },
  ]);

  const addRow = () => {
    setRows(prev => [
      ...prev,
      {
        id: prev.length + 1,
        name: '',
        type: '',
        amount: '',
        returns: '',
      },
    ]);
  };

  const updateRow = (id: number, field: keyof Investment, value: string) => {
    setRows(prev =>
      prev.map(row =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Investments</Text>

      {/* Table Header */}
      <View style={styles.tableHeader}>
        <Text style={styles.headerCell}>Asset</Text>
        <Text style={styles.headerCell}>Type</Text>
        <Text style={styles.headerCell}>Amount</Text>
        <Text style={styles.headerCell}>%</Text>
      </View>

      <ScrollView>
        {rows.map(row => (
          <View key={row.id} style={styles.tableRow}>
            <TextInput
              style={styles.input}
              placeholder="Reliance Fund"
              value={row.name}
              onChangeText={text => updateRow(row.id, 'name', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Equity"
              value={row.type}
              onChangeText={text => updateRow(row.id, 'type', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="50000"
              keyboardType="numeric"
              value={row.amount}
              onChangeText={text => updateRow(row.id, 'amount', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="12"
              keyboardType="numeric"
              value={row.returns}
              onChangeText={text => updateRow(row.id, 'returns', text)}
            />
          </View>
        ))}
      </ScrollView>

      {/* Add Row Button */}
      <TouchableOpacity style={styles.addButton} onPress={addRow}>
        <Text style={styles.addButtonText}>+ Add Investment</Text>
      </TouchableOpacity>
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
    marginBottom: 16,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: colors.card,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 6,
  },
  headerCell: {
    flex: 1,
    fontWeight: '600',
    color: colors.textDark,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 8,
    paddingVertical: 6,
  },
  input: {
    flex: 1,
    textAlign: 'center',
    paddingVertical: 10,
    color: colors.textDark,
  },
  addButton: {
    marginTop: 16,
    backgroundColor: colors.success,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
});
