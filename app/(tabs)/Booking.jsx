import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useRouter, useSearchParams } from 'expo-router';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tickets: 1,
  });

  const { eventId } = useSearchParams(); // Access eventId from URL params
  const router = useRouter(); // For navigation

  const handleChange = (e, field) => {
    setFormData((prev) => ({ ...prev, [field]: e.nativeEvent.text }));
  };

  const handleSubmit = () => {
    // Handle ticket booking logic (e.g., send data to server)
    console.log('Booking submitted:', formData);
    router.push(`/ticketDetails/${eventId}`);
  };

  return (
    <View>
      <Text>Booking for Event {eventId}</Text>
      <TextInput
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) => handleChange(e, 'name')}
      />
      <TextInput
        placeholder="Your Email"
        value={formData.email}
        onChange={(e) => handleChange(e, 'email')}
      />
      <TextInput
        placeholder="Number of Tickets"
        keyboardType="numeric"
        value={formData.tickets.toString()}
        onChange={(e) => handleChange(e, 'tickets')}
      />
      <Button title="Confirm Booking" onPress={handleSubmit} />
    </View>
  );
};

export default Booking;
