// App.tsx
import React from 'react';
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
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Mint">
        <Stack.Screen
          name="Mint"
          component={MintScreen}
          options={{ title: 'Mint' }}
        />
        <Stack.Screen
          name="Gallery"
          component={GalleryScreen}
          options={{ title: 'Galeri' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
