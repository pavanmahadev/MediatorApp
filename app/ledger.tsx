import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const dummyData = [
  { id: '1', name: 'Ramesh Patel', location: 'North Market', phone: '+91 98765 43210', entries: 12, totalAmount: 50000, paidAmount: 30000 },
  { id: '2', name: 'Suresh Kumar', location: 'East Hub', phone: '+91 87654 32109', entries: 5, totalAmount: 25000, paidAmount: 25000 },
];

export default function Ledger() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Ledger</Text>
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Total Pending Balance</Text>
          <Text style={styles.balanceValue}>₹20,000</Text>
        </View>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={styles.activeTabText}>Farmers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Buyers</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        contentContainerStyle={{ padding: 15 }}
        data={dummyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const pendingBalance = item.totalAmount - item.paidAmount;
          
          return (
            <TouchableOpacity style={styles.card} onPress={() => router.push(`/ledger-detail?id=${item.id}&name=${item.name}`)}>
              <View style={styles.cardHeader}>
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.subtext}>{item.location} • {item.phone}</Text>
                </View>
                <View style={[styles.statusBadge, { backgroundColor: pendingBalance > 0 ? '#ffebee' : '#e8f5e9' }]}>
                  <Text style={[styles.statusText, { color: pendingBalance > 0 ? '#d32f2f' : '#2e7d32' }]}>
                    {pendingBalance > 0 ? 'Pending' : 'Paid'}
                  </Text>
                </View>
              </View>
              
              <View style={styles.divider} />
              
              <View style={styles.row}>
                <View>
                  <Text style={styles.label}>Entries</Text>
                  <Text style={styles.value}>{item.entries}</Text>
                </View>
                <View>
                  <Text style={styles.label}>Total Amount</Text>
                  <Text style={styles.value}>₹{item.totalAmount}</Text>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                  <Text style={styles.label}>Pending</Text>
                  <Text style={[styles.value, { color: pendingBalance > 0 ? '#d32f2f' : '#2e7d32' }]}>
                    ₹{pendingBalance}
                  </Text>
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
  header: { backgroundColor: '#2e7d32', padding: 20, paddingTop: 60, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: 15 },
  balanceCard: { backgroundColor: 'white', padding: 20, borderRadius: 15, elevation: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 4 },
  balanceLabel: { fontSize: 14, color: '#666', marginBottom: 5 },
  balanceValue: { fontSize: 28, fontWeight: 'bold', color: '#d32f2f' },
  tabs: { flexDirection: 'row', padding: 15, paddingBottom: 5 },
  tab: { flex: 1, paddingVertical: 12, alignItems: 'center', borderBottomWidth: 2, borderBottomColor: 'transparent' },
  activeTab: { borderBottomColor: '#2e7d32' },
  tabText: { color: '#666', fontWeight: 'bold', fontSize: 16 },
  activeTabText: { color: '#2e7d32', fontWeight: 'bold', fontSize: 16 },
  card: { backgroundColor: 'white', padding: 15, borderRadius: 15, marginBottom: 15, elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  name: { fontSize: 18, fontWeight: 'bold', color: '#111', marginBottom: 4 },
  subtext: { fontSize: 13, color: '#666' },
  statusBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10 },
  statusText: { fontSize: 12, fontWeight: 'bold' },
  divider: { height: 1, backgroundColor: '#eee', marginVertical: 12 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  label: { fontSize: 12, color: '#666', marginBottom: 4 },
  value: { fontSize: 16, fontWeight: 'bold', color: '#333' }
});
