import React from 'react';
import { WalletProvider } from './src/contexts/WalletContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MintScreen from './src/screens/MintScreen';
import GalleryScreen from './src/screens/GalleryScreen';

export type RootStackParamList = {
  Mint: undefined;
  Gallery: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <WalletProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Mint">
          <Stack.Screen name="Mint" component={MintScreen} />
          <Stack.Screen name="Gallery" component={GalleryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </WalletProvider>
  );
}
