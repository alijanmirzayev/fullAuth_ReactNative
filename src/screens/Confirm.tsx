import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function TwoFactorAuthView() {
  const [code, setCode] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
      </View>
      <Text style={styles.title}>Two-Factor Authentication</Text>
      <Text style={styles.description}>
        Enter the code sent to your email to complete the login process.
      </Text>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Enter Code"
          keyboardType="number-pad"
          maxLength={6}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logoContainer: {
    overflow: 'hidden',
    marginBottom:20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius:50,
  },
  description: {
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    width: '80%',
    height: 50,
    backgroundColor: 'black',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    shadowColor: '#00CED1',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#00CED1',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});