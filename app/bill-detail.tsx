import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function BillDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Bill {id || 'INV-001'}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.receiptCard}>
          <View style={styles.statusBanner}>
            <Text style={styles.statusBannerText}>Partially Paid</Text>
          </View>
          
          <View style={styles.billInfo}>
            <Text style={styles.farmerName}>Ramesh Patel</Text>
            <Text style={styles.date}>24 Apr 2026 • 10:30 AM</Text>
          </View>
          
          <View style={styles.divider} />
          
          <View style={styles.itemRow}>
            <Text style={styles.itemLabel}>Tomato (500kg @ ₹40)</Text>
            <Text style={styles.itemValue}>₹20,000</Text>
          </View>
          
          <View style={styles.divider} />
          
          <Text style={styles.sectionLabel}>Deductions</Text>
          <View style={styles.itemRow}>
            <Text style={styles.deductionLabel}>Service Charge (5%)</Text>
            <Text style={styles.deductionValue}>- ₹1,000</Text>
          </View>
          <View style={styles.itemRow}>
            <Text style={styles.deductionLabel}>Transport</Text>
            <Text style={styles.deductionValue}>- ₹500</Text>
          </View>
          <View style={styles.itemRow}>
            <Text style={styles.deductionLabel}>Labor</Text>
            <Text style={styles.deductionValue}>- ₹200</Text>
          </View>
          <View style={styles.itemRow}>
            <Text style={[styles.deductionLabel, { fontWeight: 'bold' }]}>Total Deductions</Text>
            <Text style={[styles.deductionValue, { fontWeight: 'bold' }]}>- ₹1,700</Text>
          </View>
          
          <View style={styles.divider} />
          
          <View style={styles.itemRow}>
            <Text style={styles.netLabel}>Net Payable</Text>
            <Text style={styles.netValue}>₹18,300</Text>
          </View>
          
          <View style={styles.itemRow}>
            <Text style={styles.paidLabel}>Amount Paid</Text>
            <Text style={styles.paidValue}>₹10,000</Text>
          </View>
          
          <View style={[styles.itemRow, styles.finalRow]}>
            <Text style={styles.pendingLabel}>Pending Balance</Text>
            <Text style={styles.pendingValue}>₹8,300</Text>
          </View>
        </View>
        
        <TouchableOpacity style={styles.downloadButton}>
          <Ionicons name="download-outline" size={20} color="white" style={{ marginRight: 8 }} />
          <Text style={styles.downloadText}>Download Receipt</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { backgroundColor: '#2e7d32', padding: 20, paddingTop: 60, flexDirection: 'row', alignItems: 'center' },
  backButton: { marginRight: 15 },
  title: { fontSize: 20, fontWeight: 'bold', color: 'white' },
  content: { padding: 20 },
  receiptCard: { backgroundColor: 'white', borderRadius: 15, padding: 20, elevation: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
  statusBanner: { backgroundColor: '#fff3e0', padding: 8, borderRadius: 8, alignSelf: 'flex-start', marginBottom: 15 },
  statusBannerText: { color: '#e65100', fontWeight: 'bold', fontSize: 12 },
  billInfo: { marginBottom: 15 },
  farmerName: { fontSize: 20, fontWeight: 'bold', color: '#111' },
  date: { fontSize: 14, color: '#666', marginTop: 4 },
  divider: { height: 1, backgroundColor: '#eee', marginVertical: 15 },
  itemRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  itemLabel: { fontSize: 16, color: '#333' },
  itemValue: { fontSize: 16, fontWeight: 'bold', color: '#111' },
  sectionLabel: { fontSize: 14, fontWeight: 'bold', color: '#666', marginBottom: 10 },
  deductionLabel: { fontSize: 14, color: '#666' },
  deductionValue: { fontSize: 14, color: '#d32f2f' },
  netLabel: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  netValue: { fontSize: 18, fontWeight: 'bold', color: '#111' },
  paidLabel: { fontSize: 16, color: '#2e7d32' },
  paidValue: { fontSize: 16, fontWeight: 'bold', color: '#2e7d32' },
  finalRow: { backgroundColor: '#ffebee', padding: 15, borderRadius: 10, marginTop: 10 },
  pendingLabel: { fontSize: 18, fontWeight: 'bold', color: '#d32f2f' },
  pendingValue: { fontSize: 20, fontWeight: 'bold', color: '#d32f2f' },
  downloadButton: { backgroundColor: '#2e7d32', flexDirection: 'row', padding: 15, borderRadius: 12, alignItems: 'center', justifyContent: 'center', marginTop: 20 },
  downloadText: { color: 'white', fontSize: 16, fontWeight: 'bold' }
});
