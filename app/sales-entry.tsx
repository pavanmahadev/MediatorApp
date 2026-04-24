import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function SalesEntry() {
  const router = useRouter();

  const [items, setItems] = useState([{ id: 1 }]);

  const addItem = () => {
    setItems([...items, { id: Date.now() }]);
  };

  const removeItem = (id: number) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      {/* 1. HEADER */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={24} color="#111" />
          </TouchableOpacity>
          <View>
            <Text style={styles.headerTitle}>Sales Entry</Text>
            <Text style={styles.headerSubtitle}>Record Sale to Buyer</Text>
          </View>
        </View>
        <Ionicons name="cart-outline" size={24} color="#2E7D32" />
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        
        {/* 2. BUYER SECTION */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Buyer Details</Text>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Select Buyer</Text>
            <View style={styles.searchContainer}>
              <Ionicons name="search" size={20} color="#999" />
              <TextInput 
                placeholder="Search buyer name or phone" 
                style={styles.searchInput}
                placeholderTextColor="#999"
              />
            </View>
          </View>
        </View>

        {/* 3. BILL INFO */}
        <View style={styles.rowCard}>
          <View style={styles.flexHalf}>
            <Text style={styles.label}>Bill ID</Text>
            <View style={styles.disabledInput}>
              <Text style={styles.disabledText}>#SLS-1025</Text>
            </View>
          </View>
          <View style={styles.flexHalf}>
            <Text style={styles.label}>Bill Date</Text>
            <View style={styles.disabledInput}>
              <Text style={styles.disabledText}>24 Apr 2026</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Service Charge (%)</Text>
            <TextInput 
              placeholder="e.g. 2" 
              style={styles.input}
              keyboardType="numeric"
              placeholderTextColor="#999"
            />
          </View>
        </View>

        {/* 4. SALE ITEMS TABLE */}
        <View style={styles.card}>
          <View style={styles.cardHeaderRow}>
            <Text style={styles.sectionTitle}>Sale Items</Text>
            <TouchableOpacity onPress={addItem}>
              <Text style={styles.addText}>+ Add Item</Text>
            </TouchableOpacity>
          </View>

          {items.map((item, index) => (
            <View key={item.id} style={styles.itemRowContainer}>
              {index > 0 && <View style={styles.itemDivider} />}
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Vegetable</Text>
                <View style={styles.searchContainer}>
                  <Ionicons name="leaf-outline" size={20} color="#999" />
                  <TextInput 
                    placeholder="Search vegetable" 
                    style={styles.searchInput}
                    placeholderTextColor="#999"
                  />
                </View>
                <Text style={styles.stockText}>Available Stock: 500 kg</Text>
              </View>
              
              <View style={styles.multiInputRow}>
                <View style={styles.flexInput}>
                  <Text style={styles.label}>Qty (kg)</Text>
                  <TextInput style={styles.input} placeholder="0" keyboardType="numeric" />
                </View>
                <View style={styles.flexInput}>
                  <Text style={styles.label}>Rate (₹)</Text>
                  <TextInput style={styles.input} placeholder="0" keyboardType="numeric" />
                </View>
                <View style={styles.flexInput}>
                  <Text style={styles.label}>Subtotal</Text>
                  <View style={styles.disabledInput}>
                    <Text style={styles.autoText}>₹0</Text>
                  </View>
                </View>
              </View>

              {items.length > 1 && (
                <TouchableOpacity style={styles.removeBtn} onPress={() => removeItem(item.id)}>
                  <Ionicons name="trash-outline" size={16} color="#D32F2F" />
                  <Text style={styles.removeText}>Remove Item</Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
        </View>

        {/* 5. CHARGES SECTION */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Additional Charges & Payment</Text>
          
          <View style={styles.multiInputRow}>
            <View style={styles.flexHalfInput}>
              <Text style={styles.label}>Transport (₹)</Text>
              <TextInput style={styles.input} placeholder="0" keyboardType="numeric" />
            </View>
            <View style={styles.flexHalfInput}>
              <Text style={styles.label}>Loading (₹)</Text>
              <TextInput style={styles.input} placeholder="0" keyboardType="numeric" />
            </View>
          </View>
          
          <View style={styles.multiInputRow}>
            <View style={styles.flexHalfInput}>
              <Text style={styles.label}>Labor (₹)</Text>
              <TextInput style={styles.input} placeholder="0" keyboardType="numeric" />
            </View>
            <View style={styles.flexHalfInput}>
              <Text style={styles.label}>Cash Received (₹)</Text>
              <TextInput style={styles.input} placeholder="0" keyboardType="numeric" />
            </View>
          </View>
        </View>

        {/* 6. SUMMARY SECTION */}
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Sale Summary</Text>
          <View style={styles.divider} />
          
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Gross Sale</Text>
            <Text style={styles.summaryValue}>₹0.00</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Service Charge</Text>
            <Text style={styles.summaryValueGreen}>+ ₹0.00</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Total Charges</Text>
            <Text style={styles.summaryValueGreen}>+ ₹0.00</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Cash Received</Text>
            <Text style={styles.summaryValueRed}>- ₹0.00</Text>
          </View>
          
          <View style={styles.dividerDashed} />
          
          <View style={styles.finalRow}>
            <Text style={styles.finalLabel}>Remaining Balance</Text>
            <Text style={styles.finalValue}>₹0.00</Text>
          </View>
        </View>

      </ScrollView>

      {/* 7. FINAL BUTTON */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.recordBtn} activeOpacity={0.8}>
          <Ionicons name="checkmark-circle" size={20} color="#FFF" style={{ marginRight: 8 }} />
          <Text style={styles.recordBtnText}>Record Sale</Text>
        </TouchableOpacity>
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
  rowCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  flexHalf: {
    width: '48%',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 12,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  addText: {
    color: '#2E7D32',
    fontWeight: 'bold',
    fontSize: 14,
  },
  inputGroup: { marginBottom: 12 },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#555',
    marginBottom: 6,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
    backgroundColor: '#FAFAFA',
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 15,
    color: '#111',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
    fontSize: 15,
    color: '#111',
    backgroundColor: '#FAFAFA',
  },
  disabledInput: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  disabledText: { fontSize: 15, color: '#666', fontWeight: '500' },
  autoText: { fontSize: 15, color: '#111', fontWeight: 'bold' },
  stockText: { fontSize: 12, color: '#2E7D32', marginTop: 4, fontWeight: '500' },
  multiInputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  flexInput: { width: '31%' },
  flexHalfInput: { width: '48%' },
  itemRowContainer: { marginBottom: 4 },
  itemDivider: {
    height: 1,
    backgroundColor: '#EEE',
    marginVertical: 16,
  },
  removeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 4,
    padding: 4,
  },
  removeText: { color: '#D32F2F', fontSize: 13, marginLeft: 4, fontWeight: '500' },
  summaryCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#2E7D32',
  },
  summaryTitle: { fontSize: 16, fontWeight: 'bold', color: '#111' },
  divider: { height: 1, backgroundColor: '#EEE', marginVertical: 12 },
  dividerDashed: { height: 1, backgroundColor: '#EEE', marginVertical: 12, borderStyle: 'dashed' },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  summaryLabel: { fontSize: 14, color: '#555' },
  summaryValue: { fontSize: 14, fontWeight: '600', color: '#111' },
  summaryValueRed: { fontSize: 14, fontWeight: '600', color: '#D32F2F' },
  summaryValueGreen: { fontSize: 14, fontWeight: '600', color: '#2E7D32' },
  finalRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#E8F5E9', padding: 12, borderRadius: 8 },
  finalLabel: { fontSize: 16, fontWeight: 'bold', color: '#2E7D32' },
  finalValue: { fontSize: 20, fontWeight: 'bold', color: '#2E7D32' },
  footer: {
    backgroundColor: '#FFF',
    padding: 16,
    paddingBottom: Platform.OS === 'ios' ? 32 : 16,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  recordBtn: {
    backgroundColor: '#2E7D32',
    borderRadius: 12,
    flexDirection: 'row',
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recordBtnText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});
