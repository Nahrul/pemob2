// screens/PressableDemoScreen.js
// Layar latihan: mengenal Pressable dan urutan event saat disentuh.
 
import { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';
 
export default function PressableDemoScreen() {
  const [count, setCount] = useState(0);
  const [log, setLog] = useState([]);
 
  // Menambahkan nama event ke daftar log (maksimal 6 baris terakhir)
  const catat = (namaEvent) => {
    setLog((sebelumnya) => [namaEvent, ...sebelumnya].slice(0, 6));
  };
 
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Pressable Demo</Text>
 
      <Pressable
        onPressIn={() => catat('onPressIn')}
        onPressOut={() => catat('onPressOut')}
        onPress={() => {
          catat('onPress');
          setCount(count + 1);
        }}
        onLongPress={() => catat('onLongPress')}
        style={({ pressed }) => [
          styles.box,
          { backgroundColor: pressed ? COLORS.dark : COLORS.primary },
        ]}
      >
        {({ pressed }) => (
          <Text style={styles.boxText}>
            {pressed ? 'Sedang ditekan...' : 'Tekan saya'}
          </Text>
        )}
      </Pressable>
 
      <Text style={styles.counter}>Jumlah onPress: {count}</Text>
 
      <Text style={styles.section}>Urutan event (terbaru di atas):</Text>
      <View style={styles.logBox}>
        {log.map((item, index) => (
          <Text key={index} style={styles.logText}>
            {item}
          </Text>
        ))}
      </View>
 
      <Text style={styles.section}>Pembanding: Button bawaan</Text>
      <Button title="Button bawaan" onPress={() => catat('Button')} />
    </View>
  );
}
 
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: 64,
    paddingHorizontal: SIZES.padding,
    gap: 12,
  },
  title: { fontSize: 24, fontWeight: 'bold', color: COLORS.dark },
  box: {
    height: 120,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxText: { fontSize: 18, fontWeight: 'bold', color: COLORS.card },
  counter: { fontSize: 16, color: COLORS.dark },
  section: { fontSize: 14, fontWeight: 'bold', color: COLORS.muted },
  logBox: {
    minHeight: 150,
    backgroundColor: COLORS.card,
    borderRadius: SIZES.radius,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 12,
    gap: 4,
  },
  logText: { fontSize: 14, color: COLORS.text },
});
