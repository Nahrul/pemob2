// components/AppButton.js (Tahap 1: tombol dasar)
// Presentational component: tombol yang bisa dipakai ulang.
 
import { Pressable, StyleSheet, Text } from 'react-native';
import { COLORS } from '../constants/theme';
 
export default function AppButton({ title, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        pressed ? styles.pressed : null,
      ]}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}
 
const styles = StyleSheet.create({
  base: {
    alignSelf: 'flex-start',
    height: 44,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.8,
    transform: [{ scale: 0.97 }],
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.card,
  },
});
