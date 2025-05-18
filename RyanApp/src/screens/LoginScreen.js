import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />
      <TextInput placeholder="Senha" style={styles.input} secureTextEntry />

      <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Home')}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.link}>Criar uma conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE1E1',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 32,
    color: '#B53333',
    marginBottom: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#FFF',
    borderColor: '#FF4848',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
    color: '#B53333',
  },
  button: {
    backgroundColor: '#FF4848',
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  link: {
    color: '#B53333',
    textAlign: 'center',
    marginTop: 10,
  },
});
