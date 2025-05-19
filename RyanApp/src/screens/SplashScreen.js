import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('..src/assets/dragão 1.png')} style={styles.dragon} />
      <Image source={require('..src/assets/ORIRYAN.png')} style={styles.logo} />
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Enter</Text>
      </TouchableOpacity>
      
      <Text style={styles.linkText}>Don’t have an account?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE1E1',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  dragon: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 160,
    height: 200,
    resizeMode: 'contain',
  },
  logo: {
    width: 250,
    height: 100,
    marginBottom: 60,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#FF4848',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#B53333',
    fontSize: 14,
    marginTop: 10,
  },
});
