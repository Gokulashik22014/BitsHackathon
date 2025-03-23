
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tickets: '1',
  });

  const { eventId } = useLocalSearchParams(); // ✅ Corrected Hook
  const router = useRouter();

  const handleChange = (text, field) => {
    setFormData((prev) => ({ ...prev, [field]: text }));
  };

  const handleSubmit = () => {
    console.log('Booking submitted:', formData);
    router.push(`/ticketDetails/${eventId}`); // ✅ Navigates to ticket details
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Booking for Event {eventId}</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={formData.name}
        onChangeText={(text) => handleChange(text, 'name')}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Email"
        value={formData.email}
        onChangeText={(text) => handleChange(text, 'email')}
      />
      <TextInput
        style={styles.input}
        placeholder="Number of Tickets"
        keyboardType="numeric"
        value={formData.tickets}
        onChangeText={(text) => handleChange(text, 'tickets')}
      />
      <Button title="Confirm Booking" onPress={handleSubmit} />
    </View>
  );
};

export default Booking;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8f9fa' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
});