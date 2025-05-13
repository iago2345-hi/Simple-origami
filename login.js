import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/dragon-top.png')} style={styles.topDragon} />
      
      <Text style={styles.logoText}>
        <Text style={styles.logoR}>R</Text>yan
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.linkText}>Já tem conta?</Text>
      </TouchableOpacity>

      <Image source={require('/workspaces/Simple-origami/MeuAppLogin/assets/images/dragão 1.png')} style={styles.bottomDragon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
  },
  topDragon: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  bottomDragon: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  logoText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#7b1c1c',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
    marginTop: 100,
  },
  logoR: {
    fontSize: 64,
    color: '#d32f2f',
  },
  button: {
    backgroundColor: '#fff',
    borderColor: '#d32f2f',
    borderWidth: 3,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 60,
    marginTop: 40,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  linkText: {
    color: '#2196f3',
    marginTop: 20,
  },
});
