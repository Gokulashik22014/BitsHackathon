import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";

const Home = () => {
  const currentEvent = {
    title: "Tech Expo 2025",
    date: "March 30, 2025",
    location: "San Francisco, CA",
    description: "An event showcasing the latest innovations in AI, Web3, and VR.",
  };

  const trendingEvents = [
    { id: "1", title: "Music Fest 2025", location: "Los Angeles, CA", date: "April 15, 2025" },
    { id: "2", title: "Startup Summit", location: "New York, NY", date: "May 10, 2025" },
    { id: "3", title: "AI Conference", location: "London, UK", date: "June 5, 2025" },
  ];

  return (
    <View style={styles.container}>
      {/* Current Event Section */}
      <View style={styles.currentEvent}>
        <Text style={styles.heading}>Current Event</Text>
        <Text style={styles.eventTitle}>{currentEvent.title}</Text>
        <Text>{currentEvent.date} - {currentEvent.location}</Text>
        <Text style={styles.description}>{currentEvent.description}</Text>
      </View>

      {/* Trending Events Section */}
      <Text style={styles.heading}>Trending Events</Text>
      <FlatList
        data={trendingEvents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.eventItem}>
            <Text style={styles.eventTitle}>{item.title}</Text>
            <Text>{item.date} - {item.location}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  heading: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  currentEvent: { padding: 15, backgroundColor: "#f0f0f0", borderRadius: 10, marginBottom: 20 },
  eventTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 5 },
  description: { color: "#555", marginTop: 5 },
  eventItem: { padding: 15, borderBottomWidth: 1, borderBottomColor: "#ddd" },
});

export default Home;
