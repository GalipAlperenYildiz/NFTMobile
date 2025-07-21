import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { useWalletContext } from '../contexts/WalletContext';

type Props = NativeStackScreenProps<RootStackParamList, 'Mint'>;

export default function MintScreen({ navigation }: Props) {
  const { connect, disconnect, publicKey } = useWalletContext();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mint Ekranı</Text>

      {publicKey ? (
        <>
          <Text style={styles.subtitle}>Bağlı Cüzdan: {publicKey.toString()}</Text>
          <Button title="Disconnect" onPress={disconnect} />
        </>
      ) : (
        <Button title="Connect Wallet" onPress={connect} />
      )}

      <View style={{ height: 20 }} />

      <Button title="Galeriye Git" onPress={() => navigation.navigate('Gallery')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
  subtitle: { marginBottom: 12, textAlign: 'center' }
});
