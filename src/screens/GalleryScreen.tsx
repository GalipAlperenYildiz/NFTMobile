import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { useWalletContext } from '../contexts/WalletContext';

type Props = NativeStackScreenProps<RootStackParamList, 'Gallery'>;

export default function GalleryScreen({ }: Props) {
  const { publicKey } = useWalletContext();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gallery Ekranı</Text>
      {publicKey
        ? <Text>Burada mint edilmiş NFT’leriniz listelenecek.</Text>
        : <Text>Önce cüzdanınızı bağlayın.</Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 }
});
