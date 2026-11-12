// components/AppButton.js (Tahap 3: lengkap)
// Presentational component: tombol reusable dengan variant, ukuran,
// ikon, serta state disabled dan loading.
 
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';
import FaSolid from '@react-native-vector-icons/fontawesome-free-solid';
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
 
// Ukuran untuk setiap size tombol (termasuk ukuran ikon dan jarak)
const BUTTON_SIZES = {
  sm: { height: 36, paddingHorizontal: 12, fontSize: 14, icon: 14, gap: 6 },
  md: { height: 44, paddingHorizontal: 16, fontSize: 16, icon: 16, gap: 8 },
  lg: {
    height: 52,
    paddingHorizontal: 20,
    fontSize: 18,
    icon: 18,
    gap: 10,
  },
};
 
export default function AppButton({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  disabled = false,
  loading = false,
  fullWidth = false,
  accessibilityLabel,
  style,
}) {
  const v = VARIANTS[variant] ?? VARIANTS.primary;
  const s = BUTTON_SIZES[size] ?? BUTTON_SIZES.md;
 
  // Tombol tidak bisa ditekan saat disabled ATAU saat loading
  const isDisabled = disabled || loading;
  // Tombol ikon saja: ada ikon tetapi tidak ada teks
  const iconOnly = !title ? Boolean(icon) : false;
 
  // Saat loading, ikon diganti indikator putar
  let iconElement = null;
  if (loading) {
    iconElement = <ActivityIndicator size="small" color={v.text} />;
  } else if (icon) {
    iconElement = <FaSolid name={icon} size={s.icon} color={v.text} />;
  }
 
  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? title}
      accessibilityState={{ disabled: isDisabled, busy: loading }}
      android_ripple={{ color: 'rgba(0, 0, 0, 0.12)' }}
      style={({ pressed }) => [
        styles.base,
        {
          height: s.height,
          paddingHorizontal: iconOnly ? 0 : s.paddingHorizontal,
          width: iconOnly ? s.height : undefined,
          gap: s.gap,
          backgroundColor: v.bg,
          borderColor: v.border,
        },
        iconPosition === 'right' ? styles.reverse : null,
        fullWidth ? styles.fullWidth : null,
        pressed ? styles.pressed : null,
        isDisabled ? styles.disabled : null,
        style,
      ]}
    >
      {iconElement}
      {title ? (
        <Text
          style={[styles.title, { fontSize: s.fontSize, color: v.text }]}
        >
          {title}
        </Text>
      ) : null}
    </Pressable>
  );
}
 
const styles = StyleSheet.create({
  base: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1.5,
    overflow: 'hidden',
  },
  reverse: {
    flexDirection: 'row-reverse',
  },
  fullWidth: {
    alignSelf: 'stretch',
  },
  pressed: {
    opacity: 0.8,
    transform: [{ scale: 0.97 }],
  },
  disabled: {
    opacity: 0.5,
  },
  title: {
    fontWeight: 'bold',
  },
});
