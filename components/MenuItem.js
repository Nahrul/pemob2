// components/MenuItem.js
// Presentational component: satu baris menu berisi ikon kiri,
// teks, dan panah di kanan.
 
import { StyleSheet, Text, View } from 'react-native';
import FaSolid from '@react-native-vector-icons/fontawesome-free-solid';
import IconCircle from './IconCircle';
import { COLORS, SIZES } from '../constants/theme';
 
export default function MenuItem({
  icon,
  label,
  color = COLORS.primary,
  isLast = false,
}) {
  return (
    <View style={[styles.row, isLast ? styles.noBorder : null]}>
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
    </View>
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
  label: {
    flex: 1,
    fontSize: 16,
    color: COLORS.dark,
  },
  danger: {
    color: COLORS.danger,
  },
});
