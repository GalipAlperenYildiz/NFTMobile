// 1) Solana/Web3.js polyfill’leri (Buffer ve getRandomValues)
import 'react-native-get-random-values';
import { Buffer } from 'buffer';
if (global.Buffer == null) global.Buffer = Buffer;

// 2) React Navigation gesture handler
import 'react-native-gesture-handler';

// 3) (Dev-client için; Expo Go testinde yorumlayın)
// import 'expo-dev-client';

// 4) Uygulamanın giriş noktası
import { registerRootComponent } from 'expo';
import App from './App';
registerRootComponent(App);
