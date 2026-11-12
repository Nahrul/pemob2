// screens/ProfileScreen.js
// Container component: mengambil data, menyusun komponen berikon,
// dan menangani aksi tombol.
 
import { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FaSolid from '@react-native-vector-icons/fontawesome-free-solid';
import FaBrands from '@react-native-vector-icons/fontawesome-free-brands';
import ProfileCard from '../components/ProfileCard';
import MenuItem from '../components/MenuItem';
import AppButton from '../components/AppButton';
import useProfile from '../hooks/useProfile';
import { COLORS, SIZES } from '../constants/theme';
 
const MENU = [
  { icon: 'bell', label: 'Notifikasi' },
  { icon: 'lock', label: 'Keamanan Akun' },
  { icon: 'circle-question', label: 'Bantuan' },
];
 
const SOSMED = ['github', 'instagram', 'whatsapp', 'linkedin'];
 
export default function ProfileScreen() {
  const { profile, loading } = useProfile();
  const [loggingOut, setLoggingOut] = useState(false);
 
  const segera = (fitur) => {
    Alert.alert(fitur, 'Fitur ini akan dibuat pada pertemuan berikutnya.');
  };
 
  // Simulasi proses keluar akun selama 1,5 detik
  const keluar = () => {
    setLoggingOut(true);
    setTimeout(() => {
      setLoggingOut(false);
      Alert.alert('Keluar', 'Anda berhasil keluar (simulasi).');
    }, 1500);
  };
 
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
        <AppButton
          icon="gear"
          variant="ghost"
          size="sm"
          accessibilityLabel="Pengaturan"
          onPress={() => segera('Pengaturan')}
        />
      </View>
 
      <ProfileCard
        name={profile.name}
        nim={profile.nim}
        prodi={profile.prodi}
        email={profile.email}
        phone={profile.phone}
      />
 
      <View style={styles.actionRow}>
        <AppButton
          title="Edit Profil"
          icon="pen-to-square"
          style={styles.actionButton}
          onPress={() => segera('Edit Profil')}
        />
        <AppButton
          title="Bagikan"
          icon="share-nodes"
          variant="outline"
          style={styles.actionButton}
          onPress={() => segera('Bagikan')}
        />
      </View>
 
      <Text style={styles.section}>Pengaturan Akun</Text>
      <View style={styles.menuCard}>
        {MENU.map((item, index) => (
          <MenuItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            isLast={index === MENU.length - 1}
            onPress={() => segera(item.label)}
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
 
      <AppButton
        title={loggingOut ? 'Memproses...' : 'Keluar'}
        icon="right-from-bracket"
        variant="danger"
        size="lg"
        fullWidth
        loading={loggingOut}
        onPress={keluar}
      />
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
  actionRow: {
    flexDirection: 'row',
    gap: 12,
  },
  actionButton: {
    flex: 1,
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
