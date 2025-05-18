import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({ value, onChangeText, placeholder, secureTextEntry }) => (
  <TextInput
    style={styles.input}
    value={value}
    onChangeText={onChangeText}
    placeholder={placeholder}
    secureTextEntry={secureTextEntry}
  />
);

const styles = StyleSheet.create({
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
});

export default Input;
