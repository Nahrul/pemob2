// App.js
// Sementara menampilkan layar latihan tombol (Button Playground).
 
import { StatusBar } from 'expo-status-bar';
import ButtonPlaygroundScreen from './screens/ButtonPlaygroundScreen';
 
export default function App() {
  return (
    <>
      <ButtonPlaygroundScreen />
      <StatusBar style="dark" />
    </>
  );
}
