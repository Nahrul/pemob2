// components/AppButton.js (Tahap 2: variant dan ukuran)
// Presentational component: tombol yang bisa dipakai ulang.
 
import { Pressable, StyleSheet, Text } from 'react-native';
import { COLORS } from '../constants/theme';
 
// Warna untuk setiap variant tombol
const VARIANTS = {
  primary: {
    bg: COLORS.primary,
    text: COLORS.card,
    border: COLORS.primary,
  },
  secondary: {
    bg: COLORS.primaryLight,
    text: COLORS.primary,
    border: COLORS.primaryLight,
  },
  outline: {
    bg: 'transparent',
    text: COLORS.primary,
    border: COLORS.primary,
  },
  ghost: { bg: 'transparent', text: COLORS.primary, border: 'transparent' },
  danger: { bg: COLORS.danger, text: COLORS.card, border: COLORS.danger },
};
 
// Ukuran untuk setiap size tombol
const BUTTON_SIZES = {
  sm: { height: 36, paddingHorizontal: 12, fontSize: 14 },
  md: { height: 44, paddingHorizontal: 16, fontSize: 16 },
  lg: { height: 52, paddingHorizontal: 20, fontSize: 18 },
};
 
export default function AppButton({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
}) {
  // Jika nilai variant/size tidak dikenal, pakai nilai bawaan
  const v = VARIANTS[variant] ?? VARIANTS.primary;
  const s = BUTTON_SIZES[size] ?? BUTTON_SIZES.md;
 
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        {
          height: s.height,
          paddingHorizontal: s.paddingHorizontal,
          backgroundColor: v.bg,
          borderColor: v.border,
        },
        pressed ? styles.pressed : null,
      ]}
    >
      <Text style={[styles.title, { fontSize: s.fontSize, color: v.text }]}>
        {title}
      </Text>
    </Pressable>
  );
}
 
const styles = StyleSheet.create({
  base: {
    alignSelf: 'flex-start',
    borderRadius: 10,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.8,
    transform: [{ scale: 0.97 }],
  },
  title: {
    fontWeight: 'bold',
  },
});
