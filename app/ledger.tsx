import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const dummyData = [
  { id: '1', name: 'Ramesh Patel', location: 'North Market', entries: 12, totalAmount: 50000, paidAmount: 30000 },
  { id: '2', name: 'Suresh Kumar', location: 'East Hub', entries: 5, totalAmount: 25000, paidAmount: 25000 },
];

export default function Ledger() {
  const router = useRouter();

  const renderItem = ({ item }: { item: any }) => {
    const pendingBalance = item.totalAmount - item.paidAmount;
    
    return (
      <TouchableOpacity 
        style={styles.card} 
        activeOpacity={0.7}
        onPress={() => router.push(`/ledger-detail?id=${item.id}&name=${item.name}`)}
      >
        <View style={styles.cardHeader}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={[styles.badge, pendingBalance > 0 ? styles.badgePending : styles.badgePaid]}>
            <Text style={[styles.badgeText, pendingBalance > 0 ? styles.textPending : styles.textPaid]}>
              {pendingBalance > 0 ? 'Pending' : 'Paid'}
            </Text>
          </View>
        </View>
        <Text style={styles.subtext}>{item.location}</Text>
        
        <View style={styles.divider} />
        
        <View style={styles.row}>
          <View>
            <Text style={styles.label}>Total</Text>
            <Text style={styles.value}>₹{item.totalAmount.toLocaleString()}</Text>
          </View>
          <View>
            <Text style={styles.label}>Paid</Text>
            <Text style={styles.value}>₹{item.paidAmount.toLocaleString()}</Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.label}>Pending</Text>
            <Text style={[styles.value, pendingBalance > 0 && styles.textPending]}>
              ₹{pendingBalance.toLocaleString()}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color="#111" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Ledger</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.summaryCard}>
        <Text style={styles.summaryLabel}>Total Pending Balance</Text>
        <Text style={styles.summaryValue}>₹20,000</Text>
      </View>

      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
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
  summaryCard: {
    backgroundColor: '#FFF',
    margin: 16,
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  summaryLabel: { fontSize: 14, color: '#666', marginBottom: 4 },
  summaryValue: { fontSize: 28, fontWeight: 'bold', color: '#D32F2F' },
  listContent: { paddingHorizontal: 16, paddingBottom: 24 },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  name: { fontSize: 18, fontWeight: 'bold', color: '#111' },
  subtext: { fontSize: 14, color: '#666' },
  badge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
  badgePending: { backgroundColor: '#FFEBEE' },
  badgePaid: { backgroundColor: '#E8F5E9' },
  badgeText: { fontSize: 12, fontWeight: 'bold' },
  textPending: { color: '#D32F2F' },
  textPaid: { color: '#2E7D32' },
  divider: { height: 1, backgroundColor: '#EEE', marginVertical: 12 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  label: { fontSize: 12, color: '#666', marginBottom: 4 },
  value: { fontSize: 16, fontWeight: 'bold', color: '#333' },
});
