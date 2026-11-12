// screens/ProfileScreen.js
// Container component: mengambil data lalu menyusun komponen berikon.
 
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FaSolid from '@react-native-vector-icons/fontawesome-free-solid';
import FaBrands from '@react-native-vector-icons/fontawesome-free-brands';
import ProfileCard from '../components/ProfileCard';
import MenuItem from '../components/MenuItem';
import useProfile from '../hooks/useProfile';
import { COLORS, SIZES } from '../constants/theme';
 
const MENU = [
  { icon: 'pen-to-square', label: 'Edit Profil' },
  { icon: 'bell', label: 'Notifikasi' },
  { icon: 'lock', label: 'Keamanan Akun' },
  { icon: 'circle-question', label: 'Bantuan' },
  { icon: 'right-from-bracket', label: 'Keluar', color: COLORS.danger },
];
 
const SOSMED = ['github', 'instagram', 'whatsapp', 'linkedin'];
 
export default function ProfileScreen() {
  const { profile, loading } = useProfile();
 
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={COLORS.primary} />
        <Text style={styles.loadingText}>Memuat profil...</Text>
      </View>
    );
  }
 
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
    >
      <View style={styles.titleRow}>
        <Text style={styles.title}>Profil Saya</Text>
        <FaSolid name="gear" size={SIZES.iconMd} color={COLORS.muted} />
      </View>
 
      <ProfileCard
        name={profile.name}
        nim={profile.nim}
        prodi={profile.prodi}
        email={profile.email}
        phone={profile.phone}
      />
 
      <Text style={styles.section}>Pengaturan Akun</Text>
      <View style={styles.menuCard}>
        {MENU.map((item, index) => (
          <MenuItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            color={item.color}
            isLast={index === MENU.length - 1}
          />
        ))}
      </View>
 
      <Text style={styles.section}>Media Sosial</Text>
      <View style={styles.sosmedRow}>
        {SOSMED.map((name) => (
          <FaBrands
            key={name}
            name={name}
            size={SIZES.iconLg}
            color={COLORS.dark}
          />
        ))}
      </View>
    </ScrollView>
  );
}
 
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    paddingTop: 64,
    paddingHorizontal: SIZES.padding,
    paddingBottom: 32,
    gap: 16,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.background,
    gap: 12,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.dark,
  },
  section: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.muted,
  },
  menuCard: {
    backgroundColor: COLORS.card,
    borderRadius: SIZES.radius,
    borderWidth: 1,
    borderColor: COLORS.border,
    overflow: 'hidden',
  },
  sosmedRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: COLORS.card,
    borderRadius: SIZES.radius,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingVertical: SIZES.padding,
  },
  loadingText: {
    color: COLORS.muted,
  },
});
