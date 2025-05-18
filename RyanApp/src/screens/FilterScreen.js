import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function FilterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filtros</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 32, marginBottom: 20 },
});
