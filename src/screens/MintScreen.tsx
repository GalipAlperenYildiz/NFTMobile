import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useWallet } from '../contexts/WalletContext';

export default function MintScreen({ navigation }: any) {
  const { connected, connect } = useWallet();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mint Ekranı</Text>
      <Button
        title={connected ? 'Cüzdan Bağlı' : 'Cüzdanı Bağla'}
        onPress={() => connect()}
      />
      <Button title="Galeriye Git" onPress={() => navigation.navigate('Gallery')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  text: { fontSize: 24, marginBottom: 20 },
});
