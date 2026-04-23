import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const dummyBills = [
  { id: 'INV-001', product: 'Tomato', kg: 500, amount: 20000, paid: 10000, date: '24 Apr 2026' },
  { id: 'INV-002', product: 'Potato', kg: 300, amount: 7500, paid: 7500, date: '22 Apr 2026' },
];

export default function LedgerDetail() {
  const { name } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>{name || 'Farmer'} Ledger</Text>
      </View>

      <View style={styles.summaryContainer}>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>Total Purchases</Text>
          <Text style={styles.summaryValue}>₹27,500</Text>
        </View>
        <View style={styles.summaryRow}>
          <View style={[styles.summaryCard, { flex: 1, marginRight: 10 }]}>
            <Text style={styles.summaryLabel}>Paid Amount</Text>
            <Text style={[styles.summaryValue, { color: '#2e7d32' }]}>₹17,500</Text>
          </View>
          <View style={[styles.summaryCard, { flex: 1 }]}>
            <Text style={styles.summaryLabel}>Outstanding</Text>
            <Text style={[styles.summaryValue, { color: '#d32f2f' }]}>₹10,000</Text>
          </View>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Bill History</Text>
      <FlatList
        contentContainerStyle={{ padding: 15 }}
        data={dummyBills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          const pending = item.amount - item.paid;
          return (
            <TouchableOpacity style={styles.billCard} onPress={() => router.push(`/bill-detail?id=${item.id}`)}>
              <View style={styles.billHeader}>
                <Text style={styles.billId}>{item.id}</Text>
                <Text style={styles.billDate}>{item.date}</Text>
              </View>
              
              <View style={styles.billContent}>
                <View>
                  <Text style={styles.productName}>{item.product} ({item.kg}kg)</Text>
                  <Text style={styles.billAmount}>Total: ₹{item.amount}</Text>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                  <View style={[styles.statusBadge, { backgroundColor: pending > 0 ? '#fff3e0' : '#e8f5e9' }]}>
                    <Text style={[styles.statusText, { color: pending > 0 ? '#e65100' : '#2e7d32' }]}>
                      {pending > 0 ? 'Partial' : 'Paid'}
                    </Text>
                  </View>
                  {pending > 0 && <Text style={styles.pendingAmount}>Pending: ₹{pending}</Text>}
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { backgroundColor: '#2e7d32', padding: 20, paddingTop: 60, flexDirection: 'row', alignItems: 'center' },
  backButton: { marginRight: 15 },
  title: { fontSize: 20, fontWeight: 'bold', color: 'white' },
  summaryContainer: { padding: 15, backgroundColor: '#2e7d32', borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
  summaryCard: { backgroundColor: 'white', padding: 15, borderRadius: 12, marginBottom: 10, elevation: 2 },
  summaryRow: { flexDirection: 'row' },
  summaryLabel: { fontSize: 13, color: '#666', marginBottom: 5 },
  summaryValue: { fontSize: 22, fontWeight: 'bold', color: '#111' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginHorizontal: 15, marginTop: 20, marginBottom: 5 },
  billCard: { backgroundColor: 'white', padding: 15, borderRadius: 12, marginBottom: 12, elevation: 1 },
  billHeader: { flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#eee', paddingBottom: 10, marginBottom: 10 },
  billId: { fontWeight: 'bold', color: '#111' },
  billDate: { color: '#666', fontSize: 12 },
  billContent: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  productName: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 4 },
  billAmount: { fontSize: 14, color: '#666' },
  statusBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10, marginBottom: 5 },
  statusText: { fontSize: 12, fontWeight: 'bold' },
  pendingAmount: { fontSize: 13, fontWeight: 'bold', color: '#d32f2f' }
});
