import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function ManageUsers() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'farmers' | 'buyers'>('farmers');

  const dummyData = [
    { id: 'FMR-001', name: 'Ramesh Patel', location: 'Bandi Palya, Mysuru', phone: '+91 98765 43210', entries: 12, totalAmount: 45000, pending: 0, type: 'farmers' },
    { id: 'FMR-002', name: 'Suresh Kumar', location: 'Nanjangud', phone: '+91 87654 32109', entries: 8, totalAmount: 32000, pending: 15000, type: 'farmers' },
    { id: 'BYR-101', name: 'FreshMart Logistics', location: 'Bengaluru', phone: '+91 76543 21098', entries: 24, totalAmount: 125000, pending: 0, type: 'buyers' },
    { id: 'BYR-102', name: 'Green Grocers', location: 'Mandya', phone: '+91 65432 10987', entries: 15, totalAmount: 85000, pending: 20000, type: 'buyers' },
  ];

  const filteredData = dummyData.filter(item => item.type === activeTab);

  return (
    <View style={styles.container}>
      {/* 1. HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color="#111" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Manage Farmers & Buyers</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        
        {/* 2. SUMMARY SECTION */}
        <Animated.View entering={FadeInDown.duration(400).delay(100)} style={styles.summaryGrid}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryValue}>142</Text>
            <Text style={styles.summaryLabel}>Total Farmers</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={[styles.summaryValue, { color: '#D32F2F' }]}>₹4.2L</Text>
            <Text style={styles.summaryLabel}>Payable (Farmers)</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryValue}>85%</Text>
            <Text style={styles.summaryLabel}>Farmer Payout Ratio</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryValue}>38</Text>
            <Text style={styles.summaryLabel}>Total Buyers</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={[styles.summaryValue, { color: '#2E7D32' }]}>₹8.5L</Text>
            <Text style={styles.summaryLabel}>Receivable (Buyers)</Text>
          </View>
        </Animated.View>

        {/* 3. SEARCH & FILTER */}
        <Animated.View entering={FadeInDown.duration(400).delay(200)} style={styles.searchSection}>
          <View style={styles.searchRow}>
            <View style={styles.searchContainer}>
              <Ionicons name="search" size={20} color="#999" />
              <TextInput 
                placeholder="Search farmer or buyer..." 
                style={styles.searchInput}
                placeholderTextColor="#999"
              />
            </View>
            <TouchableOpacity style={styles.filterBtn}>
              <Ionicons name="options-outline" size={20} color="#111" />
              <Text style={styles.filterBtnText}>Filters</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.tabsContainer}>
            <TouchableOpacity 
              style={[styles.tabBtn, activeTab === 'farmers' && styles.tabBtnActive]}
              onPress={() => setActiveTab('farmers')}
            >
              <Text style={[styles.tabText, activeTab === 'farmers' && styles.tabTextActive]}>Farmers</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.tabBtn, activeTab === 'buyers' && styles.tabBtnActive]}
              onPress={() => setActiveTab('buyers')}
            >
              <Text style={[styles.tabText, activeTab === 'buyers' && styles.tabTextActive]}>Buyers</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>

        {/* 4. MAIN LIST */}
        <View style={styles.listContainer}>
          {filteredData.map((item, index) => (
            <Animated.View key={item.id} entering={FadeInDown.duration(400).delay(300 + index * 50)} style={styles.userCard}>
              
              <View style={styles.cardTopRow}>
                <Text style={styles.userName}>{item.name}</Text>
                <View style={styles.idBadge}>
                  <Text style={styles.idText}>{item.id}</Text>
                </View>
              </View>

              <View style={styles.cardMiddle}>
                <View style={styles.infoRow}>
                  <Ionicons name="location-outline" size={16} color="#666" />
                  <Text style={styles.infoText}>{item.location}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Ionicons name="call-outline" size={16} color="#666" />
                  <Text style={styles.infoText}>{item.phone}</Text>
                </View>
              </View>

              <View style={styles.financialSection}>
                <View style={styles.finCol}>
                  <Text style={styles.finLabel}>Total Entries</Text>
                  <Text style={styles.finValue}>{item.entries}</Text>
                </View>
                <View style={styles.finCol}>
                  <Text style={styles.finLabel}>Total Amount</Text>
                  <Text style={styles.finValue}>₹{item.totalAmount.toLocaleString()}</Text>
                </View>
                <View style={[styles.finCol, { alignItems: 'flex-end' }]}>
                  <Text style={styles.finLabel}>Payment Status</Text>
                  {item.pending === 0 ? (
                    <Text style={styles.statusPaid}>All Paid</Text>
                  ) : (
                    <Text style={styles.statusPending}>Pending ₹{item.pending.toLocaleString()}</Text>
                  )}
                </View>
              </View>

              {/* 5. ACTION BUTTONS */}
              <View style={styles.cardActions}>
                <TouchableOpacity style={styles.ledgerBtn} onPress={() => router.push(`/ledger-detail?id=${item.id}`)}>
                  <Ionicons name="book-outline" size={16} color="#2E7D32" style={{ marginRight: 6 }} />
                  <Text style={styles.ledgerBtnText}>Ledger</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.editBtn}>
                  <Ionicons name="pencil-outline" size={16} color="#555" style={{ marginRight: 6 }} />
                  <Text style={styles.editBtnText}>Edit</Text>
                </TouchableOpacity>
              </View>

            </Animated.View>
          ))}
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F7F7' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  backBtn: { marginRight: 16, padding: 4 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#111' },
  content: { padding: 16, paddingBottom: 40 },
  
  summaryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
    rowGap: 12,
  },
  summaryCard: {
    width: '31%',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 3, elevation: 1,
  },
  summaryValue: { fontSize: 18, fontWeight: 'bold', color: '#111', marginBottom: 4 },
  summaryLabel: { fontSize: 11, color: '#666', textAlign: 'center' },
  
  searchSection: { marginBottom: 20 },
  searchRow: { flexDirection: 'row', gap: 12, marginBottom: 16 },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 48,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  searchInput: { flex: 1, marginLeft: 8, fontSize: 15, color: '#111' },
  filterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    justifyContent: 'center',
  },
  filterBtnText: { marginLeft: 6, fontSize: 14, fontWeight: '600', color: '#111' },
  
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    padding: 4,
  },
  tabBtn: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  tabBtnActive: {
    backgroundColor: '#FFF',
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2, elevation: 2,
  },
  tabText: { fontSize: 15, fontWeight: '600', color: '#666' },
  tabTextActive: { color: '#2E7D32', fontWeight: 'bold' },

  listContainer: { paddingBottom: 20 },
  userCard: {
    backgroundColor: '#FFF',
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2,
  },
  cardTopRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  userName: { fontSize: 18, fontWeight: 'bold', color: '#111' },
  idBadge: { backgroundColor: '#F0F0F0', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
  idText: { fontSize: 12, fontWeight: '600', color: '#555' },
  
  cardMiddle: { marginBottom: 16, gap: 6 },
  infoRow: { flexDirection: 'row', alignItems: 'center' },
  infoText: { fontSize: 14, color: '#555', marginLeft: 6 },

  financialSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FAFAFA',
    padding: 12,
    borderRadius: 10,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  finCol: { flex: 1 },
  finLabel: { fontSize: 12, color: '#666', marginBottom: 4 },
  finValue: { fontSize: 14, fontWeight: 'bold', color: '#111' },
  statusPaid: { fontSize: 14, fontWeight: 'bold', color: '#2E7D32' },
  statusPending: { fontSize: 14, fontWeight: 'bold', color: '#D32F2F' },

  cardActions: { flexDirection: 'row', justifyContent: 'flex-end', gap: 12, borderTopWidth: 1, borderTopColor: '#EEE', paddingTop: 16 },
  ledgerBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#2E7D32',
  },
  ledgerBtnText: { fontSize: 14, fontWeight: 'bold', color: '#2E7D32' },
  editBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
  },
  editBtnText: { fontSize: 14, fontWeight: '600', color: '#555' },
});
