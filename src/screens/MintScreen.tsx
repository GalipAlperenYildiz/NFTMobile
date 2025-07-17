// src/screens/MintScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Mint'>;

export default function MintScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mint Ekranı</Text>
      <Text>Burada dosya seçme ve mint işlemi olacak.</Text>
      <Button
        title="Galeriye Git"
        onPress={() => navigation.navigate('Gallery')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center' },
  title:    { fontSize:20, fontWeight:'bold', marginBottom:8 },
});
