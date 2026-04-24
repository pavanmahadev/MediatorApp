import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const dummyProducts = [
  { id: '1', name: 'Tomato', price: '40', change: '+5.0%' },
  { id: '2', name: 'Onion', price: '30', change: '-2.0%' },
  { id: '3', name: 'Potato', price: '25', change: '0.0%' },
  { id: '4', name: 'Carrot', price: '60', change: '+1.5%' },
  { id: '5', name: 'Yalvana', price: '120', change: '0.0%' },
  { id: '6', name: 'White Brinjal', price: '45', change: '+2.0%' },
];

export default function MarketPrices() {
  const router = useRouter();

  const renderItem = ({ item }: { item: any }) => {
    const isUp = item.change.startsWith('+');
    const isDown = item.change.startsWith('-');
    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
          <View style={[styles.badge, isUp ? styles.badgeUp : isDown ? styles.badgeDown : styles.badgeNeutral]}>
            <Text style={[styles.badgeText, isUp ? styles.textUp : isDown ? styles.textDown : styles.textNeutral]}>{item.change}</Text>
          </View>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.currency}>₹</Text>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.unit}>/kg</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color="#111" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Market Prices</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#999" />
        <TextInput 
          placeholder="Search items..." 
          style={styles.searchInput}
          placeholderTextColor="#999"
        />
      </View>

      <FlatList
        data={dummyProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.row}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F7F7' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  backBtn: { padding: 4 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#111' },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    margin: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    height: 48,
  },
  searchInput: { flex: 1, marginLeft: 8, fontSize: 16, color: '#111' },
  listContent: { paddingHorizontal: 16, paddingBottom: 24 },
  row: { justifyContent: 'space-between' },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 },
  name: { fontSize: 16, fontWeight: '600', color: '#111', flex: 1, marginRight: 4 },
  badge: { paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 },
  badgeUp: { backgroundColor: '#E8F5E9' },
  badgeDown: { backgroundColor: '#FFEBEE' },
  badgeNeutral: { backgroundColor: '#F5F5F5' },
  badgeText: { fontSize: 11, fontWeight: 'bold' },
  textUp: { color: '#2E7D32' },
  textDown: { color: '#D32F2F' },
  textNeutral: { color: '#666' },
  priceContainer: { flexDirection: 'row', alignItems: 'baseline' },
  currency: { fontSize: 14, fontWeight: '600', color: '#666', marginRight: 2 },
  price: { fontSize: 24, fontWeight: 'bold', color: '#111' },
  unit: { fontSize: 12, color: '#666', marginLeft: 2 },
});
