import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function GalleryScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Galeri Ekranı</Text>
      <Button title="Mint Ekranına Dön" onPress={() => navigation.navigate('Mint')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  text: { fontSize: 24, marginBottom: 20 },
});
