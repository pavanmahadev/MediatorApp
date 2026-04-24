import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function BillDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color="#111" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Bill Details</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.invoiceCard}>
          <View style={styles.invoiceHeader}>
            <View>
              <Text style={styles.invoiceTitle}>INV-{id || '001'}</Text>
              <Text style={styles.date}>24 Apr 2026</Text>
            </View>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Partially Paid</Text>
            </View>
          </View>
          
          <View style={styles.divider} />
          
          <Text style={styles.sectionTitle}>Farmer Info</Text>
          <Text style={styles.name}>Ramesh Patel</Text>
          <Text style={styles.subtext}>+91 98765 43210</Text>
          
          <View style={styles.divider} />
          
          <Text style={styles.sectionTitle}>Charges</Text>
          <View style={styles.row}>
            <Text style={styles.itemText}>Tomato (500kg @ ₹40)</Text>
            <Text style={styles.itemValue}>₹20,000</Text>
          </View>
          
          <View style={styles.divider} />
          
          <Text style={styles.sectionTitle}>Deductions</Text>
          <View style={styles.row}>
            <Text style={styles.itemText}>Service Charge (5%)</Text>
            <Text style={styles.itemRed}>- ₹1,000</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.itemText}>Transport</Text>
            <Text style={styles.itemRed}>- ₹500</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.itemText}>Labor</Text>
            <Text style={styles.itemRed}>- ₹200</Text>
          </View>
          
          <View style={styles.dividerLine} />
          
          <View style={styles.row}>
            <Text style={styles.boldLabel}>Total Deductions</Text>
            <Text style={styles.boldRed}>- ₹1,700</Text>
          </View>
          
          <View style={styles.divider} />
          
          <View style={styles.row}>
            <Text style={styles.boldLabel}>Net Payable</Text>
            <Text style={styles.netValue}>₹18,300</Text>
          </View>
          <View style={[styles.row, { marginTop: 8 }]}>
            <Text style={styles.itemText}>Amount Paid</Text>
            <Text style={styles.itemGreen}>₹10,000</Text>
          </View>
          
          <View style={styles.finalBox}>
            <Text style={styles.finalLabel}>Pending Balance</Text>
            <Text style={styles.finalValue}>₹8,300</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
          <Ionicons name="download-outline" size={20} color="#FFF" style={{ marginRight: 8 }} />
          <Text style={styles.btnText}>Download Receipt</Text>
        </TouchableOpacity>
      </ScrollView>
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
  content: { padding: 16 },
  invoiceCard: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  invoiceHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  invoiceTitle: { fontSize: 18, fontWeight: 'bold', color: '#111' },
  date: { fontSize: 12, color: '#666', marginTop: 4 },
  badge: { backgroundColor: '#FFF3E0', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
  badgeText: { color: '#E65100', fontSize: 12, fontWeight: 'bold' },
  divider: { height: 1, backgroundColor: '#EEE', marginVertical: 16 },
  dividerLine: { height: 1, backgroundColor: '#EEE', marginVertical: 12, borderStyle: 'dashed' },
  sectionTitle: { fontSize: 14, fontWeight: 'bold', color: '#666', marginBottom: 12, textTransform: 'uppercase' },
  name: { fontSize: 16, fontWeight: 'bold', color: '#111' },
  subtext: { fontSize: 14, color: '#666', marginTop: 2 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  itemText: { fontSize: 14, color: '#333' },
  itemValue: { fontSize: 14, fontWeight: '600', color: '#111' },
  itemRed: { fontSize: 14, fontWeight: '600', color: '#D32F2F' },
  itemGreen: { fontSize: 14, fontWeight: '600', color: '#2E7D32' },
  boldLabel: { fontSize: 14, fontWeight: 'bold', color: '#111' },
  boldRed: { fontSize: 14, fontWeight: 'bold', color: '#D32F2F' },
  netValue: { fontSize: 16, fontWeight: 'bold', color: '#111' },
  finalBox: { backgroundColor: '#FFEBEE', padding: 16, borderRadius: 12, marginTop: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  finalLabel: { fontSize: 16, fontWeight: 'bold', color: '#D32F2F' },
  finalValue: { fontSize: 20, fontWeight: 'bold', color: '#D32F2F' },
  btn: { backgroundColor: '#2E7D32', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 16, borderRadius: 12 },
  btnText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});
