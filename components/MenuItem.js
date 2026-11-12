// components/MenuItem.js
// Presentational component: satu baris menu yang kini dapat ditekan.
 
import { Pressable, StyleSheet, Text } from 'react-native';
import FaSolid from '@react-native-vector-icons/fontawesome-free-solid';
import IconCircle from './IconCircle';
import { COLORS, SIZES } from '../constants/theme';
 
export default function MenuItem({
  icon,
  label,
  color = COLORS.primary,
  isLast = false,
  onPress,
}) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      android_ripple={{ color: COLORS.border }}
      style={({ pressed }) => [
        styles.row,
        isLast ? styles.noBorder : null,
        pressed ? styles.pressed : null,
      ]}
    >
      <IconCircle
        icon={icon}
        diameter={36}
        size={SIZES.iconSm}
        background={color}
      />
      <Text
        style={[
          styles.label,
          color === COLORS.danger ? styles.danger : null,
        ]}
      >
        {label}
      </Text>
      <FaSolid name="chevron-right" size={14} color={COLORS.muted} />
    </Pressable>
  );
}
 
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 12,
    paddingHorizontal: SIZES.padding,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  noBorder: {
    borderBottomWidth: 0,
  },
  pressed: {
    backgroundColor: COLORS.background,
  },
  label: {
    flex: 1,
    fontSize: 16,
    color: COLORS.dark,
  },
  danger: {
    color: COLORS.danger,
  },
});
