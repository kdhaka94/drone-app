import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddressInputScreen = () => {
  const [droneIP, setDroneIP] = useState('');
  const router = useRouter();

  const handleDroneIPChange = (text) => {
    setDroneIP(text);
  };

  const handleSubmit = () => {
    // Validate the IP address format if needed
    router.navigate(`/control?ip=${droneIP}`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter drone IP address"
        value={droneIP}
        onChangeText={handleDroneIPChange}
      />
      <Button title="Connect" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default AddressInputScreen;