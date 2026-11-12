// App.js
// Titik awal aplikasi: cukup memanggil layar (screen) utama.
 
import { StatusBar } from 'expo-status-bar';
import ProfileScreen from './screens/ProfileScreen';
 
export default function App() {
  return (
    <>
      <ProfileScreen />
      <StatusBar style="dark" />
    </>
  );
}
