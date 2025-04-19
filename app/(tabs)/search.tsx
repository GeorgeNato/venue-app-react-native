import { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Image } from 'react-native';

const MOCK_VENUES = [
  {
    id: '1',
    name: 'Grand Ballroom',
    location: 'Downtown',
    capacity: 300,
    price: '$2000/day',
    image: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=500'
  },
  {
    id: '2',
    name: 'Beach Club',
    location: 'Coastal Area',
    capacity: 150,
    price: '$1500/day',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500'
  },
];

export default function SearchScreen() {
  const [searchText, setSearchText] = useState('');

  const filteredVenues = MOCK_VENUES.filter(venue =>
    venue.name.toLowerCase().includes(searchText.toLowerCase()) ||
    venue.location.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search venues..."
        placeholderTextColor="#999"
        value={searchText}
        onChangeText={setSearchText}
        style={styles.searchInput}
      />

      <FlatList
        data={filteredVenues}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.venueCard}>
            <Image 
              source={{ uri: item.image }} 
              style={styles.venueImage}
              resizeMode="cover"
            />
            <View style={styles.venueInfo}>
              <Text style={styles.venueName}>{item.name}</Text>
              <Text style={styles.venueLocation}>📍 {item.location}</Text>
              <View style={styles.detailsRow}>
                <Text style={styles.capacity}>👥 {item.capacity}</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.noResults}>No venues found for "{searchText}"</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9fa'
  },
  searchInput: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  venueCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  venueImage: {
    width: '100%',
    height: 150,
  },
  venueInfo: {
    padding: 16,
  },
  venueName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  venueLocation: {
    color: '#666',
    marginBottom: 8,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  capacity: {
    color: '#4a6fa5',
    fontWeight: '600',
  },
  price: {
    color: '#2e7d32',
    fontWeight: 'bold',
  },
  noResults: {
    textAlign: 'center',
    marginTop: 20,
    color: '#888',
  }
});