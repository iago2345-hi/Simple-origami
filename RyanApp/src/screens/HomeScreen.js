import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página Inicial</Text>
      <Button title="Filtrar" onPress={() => navigation.navigate('Filter')} />
      <Button title="Histórico" onPress={() => navigation.navigate('History')} />
      <Button title="Perfil" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 32, marginBottom: 20 },
});
