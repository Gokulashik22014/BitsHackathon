import React from 'react';
import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';

const Events = () => {
  const events = [
    { id: 1, name: 'Concert A', date: '2025-05-01' },
    { id: 2, name: 'Comedy Show', date: '2025-06-15' },
  ];

  return (
    <View>
      <Text>Upcoming Events</Text>
      {events.map((event) => (
        <View key={event.id}>
          <Text>{event.name}</Text>
          <Text>{event.date}</Text>
          <Link href={`/booking/${event.id}`}>Book Now</Link>
        </View>
      ))}
    </View>
  );
};

export default Events;
