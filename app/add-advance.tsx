import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function AddAdvance() {
  const router = useRouter();
  
  const [advanceType, setAdvanceType] = useState<'farmer' | 'buyer'>('farmer');
  const [paymentMode, setPaymentMode] = useState('Cash');

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      {/* 1. HEADER */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={24} color="#111" />
          </TouchableOpacity>
          <View>
            <Text style={styles.headerTitle}>Add Advance</Text>
            <Text style={styles.headerSubtitle}>Record advance payment</Text>
          </View>
        </View>
        <Ionicons name="wallet-outline" size={24} color="#2E7D32" />
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        
        {/* 2. ADVANCE TYPE SECTION */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Advance Type</Text>
          
          <View style={styles.toggleContainer}>
            <TouchableOpacity 
              style={[styles.toggleBtn, advanceType === 'farmer' && styles.toggleBtnActive]}
              onPress={() => setAdvanceType('farmer')}
            >
              <Text style={[styles.toggleText, advanceType === 'farmer' && styles.toggleTextActive]}>Farmer Advance</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.toggleBtn, advanceType === 'buyer' && styles.toggleBtnActive]}
              onPress={() => setAdvanceType('buyer')}
            >
              <Text style={[styles.toggleText, advanceType === 'buyer' && styles.toggleTextActive]}>Buyer Advance</Text>
            </TouchableOpacity>
          </View>
          
          <Text style={styles.helperText}>
            {advanceType === 'farmer' ? "Money given to farmers" : "Money received from buyers"}
          </Text>
        </View>

        {/* 3. PARTY SELECTION */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>{advanceType === 'farmer' ? 'Farmer' : 'Buyer'} Details</Text>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Select {advanceType === 'farmer' ? 'Farmer' : 'Buyer'}</Text>
            <View style={styles.searchContainer}>
              <Ionicons name="person-outline" size={20} color="#999" />
              <TextInput 
                placeholder={`Search ${advanceType === 'farmer' ? 'farmer' : 'buyer'} name...`} 
                style={styles.searchInput}
                placeholderTextColor="#999"
              />
            </View>
          </View>
        </View>

        {/* 4. AMOUNT SECTION */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Advance Amount</Text>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Amount (₹)</Text>
            <View style={styles.amountContainer}>
              <Text style={styles.amountPrefix}>₹</Text>
              <TextInput 
                placeholder="Enter advance amount" 
                style={styles.amountInput}
                keyboardType="numeric"
                placeholderTextColor="#999"
              />
            </View>
          </View>
        </View>

        {/* 5. PAYMENT DETAILS */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Payment Details</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Payment Mode</Text>
            <View style={styles.modeContainer}>
              {['Cash', 'UPI', 'Bank Transfer'].map((mode) => (
                <TouchableOpacity 
                  key={mode}
                  style={[styles.modeChip, paymentMode === mode && styles.modeChipActive]}
                  onPress={() => setPaymentMode(mode)}
                >
                  <Text style={[styles.modeText, paymentMode === mode && styles.modeTextActive]}>{mode}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Remarks (Optional)</Text>
            <TextInput 
              placeholder="E.g. Advance for next crop" 
              style={styles.input}
              placeholderTextColor="#999"
            />
          </View>
        </View>

        {/* 6. DATE SECTION */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Date</Text>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Select Date</Text>
            <TouchableOpacity style={styles.dateContainer}>
              <Ionicons name="calendar-outline" size={20} color="#555" />
              <Text style={styles.dateText}>24-04-2026</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>

      {/* 7. ACTION BUTTONS */}
      <View style={styles.footer}>
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.cancelBtn} onPress={() => router.back()}>
            <Text style={styles.cancelBtnText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveBtn}>
            <Text style={styles.saveBtnText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
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
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  backBtn: { marginRight: 12, padding: 4 },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#111' },
  headerSubtitle: { fontSize: 12, color: '#666', marginTop: 2 },
  content: { padding: 16, paddingBottom: 40 },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 12,
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 4,
    marginBottom: 12,
  },
  toggleBtn: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 6,
  },
  toggleBtnActive: {
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  toggleText: { fontSize: 14, fontWeight: '600', color: '#666' },
  toggleTextActive: { color: '#2E7D32', fontWeight: 'bold' },
  helperText: { fontSize: 13, color: '#888', fontStyle: 'italic', marginTop: 4 },
  inputGroup: { marginBottom: 12 },
  label: { fontSize: 13, fontWeight: '600', color: '#555', marginBottom: 6 },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 48,
    backgroundColor: '#FAFAFA',
  },
  searchInput: { flex: 1, marginLeft: 8, fontSize: 15, color: '#111' },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2E7D32',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 54,
    backgroundColor: '#FAFAFA',
  },
  amountPrefix: { fontSize: 20, fontWeight: 'bold', color: '#2E7D32', marginRight: 8 },
  amountInput: { flex: 1, fontSize: 18, fontWeight: 'bold', color: '#111' },
  modeContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  modeChip: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#FAFAFA',
  },
  modeChipActive: {
    backgroundColor: '#E8F5E9',
    borderColor: '#2E7D32',
  },
  modeText: { fontSize: 14, color: '#666', fontWeight: '500' },
  modeTextActive: { color: '#2E7D32', fontWeight: 'bold' },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 48,
    fontSize: 15,
    color: '#111',
    backgroundColor: '#FAFAFA',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 48,
    backgroundColor: '#FAFAFA',
  },
  dateText: { marginLeft: 8, fontSize: 15, color: '#111', fontWeight: '500' },
  footer: {
    backgroundColor: '#FFF',
    padding: 16,
    paddingBottom: Platform.OS === 'ios' ? 32 : 16,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  actionRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cancelBtn: {
    flex: 1,
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#CCC',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  cancelBtnText: { color: '#555', fontSize: 16, fontWeight: 'bold' },
  saveBtn: {
    flex: 2,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#2E7D32',
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveBtnText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});
