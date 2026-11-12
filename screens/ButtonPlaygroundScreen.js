// screens/ButtonPlaygroundScreen.js
// Layar latihan: mencoba semua kemungkinan props AppButton.
 
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';
import { COLORS, SIZES } from '../constants/theme';
 
export default function ButtonPlaygroundScreen() {
  const [count, setCount] = useState(0);
  const [saving, setSaving] = useState(false);
 
  const tambah = () => setCount(count + 1);
 
  // Simulasi proses menyimpan data selama 2 detik
  const simpan = () => {
    setSaving(true);
    setTimeout(() => setSaving(false), 2000);
  };
 
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.title}>Button Playground</Text>
      <Text style={styles.counter}>Tombol ditekan: {count} kali</Text>
 
      <Text style={styles.section}>1. Variant</Text>
      <View style={styles.row}>
        <AppButton title="Primary" onPress={tambah} />
        <AppButton title="Secondary" variant="secondary" onPress={tambah} />
        <AppButton title="Outline" variant="outline" onPress={tambah} />
        <AppButton title="Ghost" variant="ghost" onPress={tambah} />
        <AppButton title="Danger" variant="danger" onPress={tambah} />
      </View>
 
      <Text style={styles.section}>2. Ukuran (size)</Text>
      <View style={styles.row}>
        <AppButton title="Kecil" size="sm" onPress={tambah} />
        <AppButton title="Sedang" size="md" onPress={tambah} />
        <AppButton title="Besar" size="lg" onPress={tambah} />
      </View>
 
      <Text style={styles.section}>3. Ikon</Text>
      <View style={styles.row}>
        <AppButton title="Kirim" icon="paper-plane" onPress={tambah} />
        <AppButton
          title="Lanjut"
          icon="arrow-right"
          iconPosition="right"
          variant="outline"
          onPress={tambah}
        />
        <AppButton
          icon="heart"
          variant="secondary"
          accessibilityLabel="Suka"
          onPress={tambah}
        />
        <AppButton
          icon="trash"
          variant="danger"
          accessibilityLabel="Hapus"
          onPress={tambah}
        />
      </View>
 
      <Text style={styles.section}>4. State disabled dan loading</Text>
      <View style={styles.row}>
        <AppButton title="Tidak aktif" disabled onPress={tambah} />
        <AppButton
          title={saving ? 'Menyimpan...' : 'Simpan Data'}
          icon="floppy-disk"
          loading={saving}
          onPress={simpan}
        />
      </View>
 
      <Text style={styles.section}>5. Lebar penuh (fullWidth)</Text>
      <AppButton
        title="Masuk"
        icon="right-to-bracket"
        size="lg"
        fullWidth
        onPress={tambah}
      />
    </ScrollView>
  );
}
 
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: COLORS.background },
  content: {
    paddingTop: 64,
    paddingHorizontal: SIZES.padding,
    paddingBottom: 32,
    gap: 12,
  },
  title: { fontSize: 24, fontWeight: 'bold', color: COLORS.dark },
  counter: { fontSize: 16, color: COLORS.text },
  section: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.muted,
    marginTop: 8,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 8,
  },
});
