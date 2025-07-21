import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  console.log('🔥 App render edildi');
  return (
    <View style={styles.container}>
      <Text>✅ Basit test: JS çalışıyor!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
