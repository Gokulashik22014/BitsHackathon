import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSearchParams } from 'expo-router';

const TicketDetails = () => {
  const { ticketId } = useSearchParams(); // Access ticketId from URL params
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    // Fetch ticket details from your API or local data
    const fetchedTicket = {
      eventName: 'Concert A',
      userName: 'John Doe',
      tickets: 2,
    };
    setTicket(fetchedTicket);
  }, [ticketId]);

  return (
    <View>
      {ticket ? (
        <>
          <Text>Event: {ticket.eventName}</Text>
          <Text>Booked By: {ticket.userName}</Text>
          <Text>Number of Tickets: {ticket.tickets}</Text>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default TicketDetails;
