// components/ProfileCard.js
// Presentational component: kartu profil, kini dilengkapi ikon.
 
import { StyleSheet, Text, View } from 'react-native';
import IconCircle from './IconCircle';
import IconLabel from './IconLabel';
import { COLORS, SIZES } from '../constants/theme';
 
export default function ProfileCard({ name, nim, prodi, email, phone }) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <IconCircle icon="user" diameter={64} size={SIZES.iconLg} />
        <View style={styles.headerText}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.prodi}>Program Studi {prodi}</Text>
        </View>
      </View>
 
      <View style={styles.divider} />
 
      <IconLabel icon="id-card" label={nim} />
      <IconLabel icon="envelope" label={email} />
      <IconLabel icon="phone" label={phone} />
    </View>
  );
}
 
const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: SIZES.radius,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SIZES.padding,
    gap: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  headerText: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.dark,
  },
  prodi: {
    fontSize: 14,
    color: COLORS.muted,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 4,
  },
});
