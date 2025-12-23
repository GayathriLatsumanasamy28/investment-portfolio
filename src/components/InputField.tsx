import { TextInput, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function InputField(props: any) {
  return (
    <TextInput
      {...props}
      placeholderTextColor={colors.textLight}
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#F1F5F9',
    padding: 14,
    borderRadius: 10,
    marginVertical: 10,
    fontSize: 15,
  },
});


