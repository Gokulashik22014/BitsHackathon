import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const TicketDetails = () => {
  const { ticketId } = useLocalSearchParams(); // ✅ Fixed Hook
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    // Simulate fetching ticket details (Replace with API call if needed)
    setTimeout(() => {
      setTicket({
        eventName: 'Concert A',
        userName: 'John Doe',
        tickets: 2,
      });
    }, 1000);
  }, [ticketId]);

  return (
    <View style={styles.container}>
      {ticket ? (
        <>
          <Text style={styles.title}>Ticket Details</Text>
          <Text style={styles.text}>🎵 Event: {ticket.eventName}</Text>
          <Text style={styles.text}>👤 Booked By: {ticket.userName}</Text>
          <Text style={styles.text}>🎟 Tickets: {ticket.tickets}</Text>
        </>
      ) : (
        <Text style={styles.loading}>Loading...</Text>
      )}
    </View>
  );
};

export default TicketDetails;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  text: { fontSize: 18, marginBottom: 10 },
  loading: { fontSize: 16, fontStyle: 'italic', color: 'gray' },
});