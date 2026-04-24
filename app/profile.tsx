import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileSettings() {
  const router = useRouter();

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      {/* 1. HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color="#111" />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Profile Settings / ಪ್ರೊಫೈಲ್ ಸೆಟ್ಟಿಂಗ್ಸ್</Text>
          <Text style={styles.headerSubtitle}>Manage your personal and business identity</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        
        {/* 2. PROFILE COMPLETION */}
        <View style={styles.card}>
          <View style={styles.completionHeader}>
            <Text style={styles.sectionTitle}>Profile Completion</Text>
            <Text style={styles.percentText}>100%</Text>
          </View>
          <View style={styles.progressBarBg}>
            <View style={styles.progressBarFill} />
          </View>
          <Text style={styles.infoText}>Click save to update profile</Text>
        </View>

        {/* 3. PERSONAL INFORMATION */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Personal Information / ವೈಯಕ್ತಿಕ ಮಾಹಿತಿ</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput style={styles.input} defaultValue="Mahadevaswamy" />
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Mobile Number</Text>
            <TextInput style={styles.input} defaultValue="+91 98765 43210" keyboardType="phone-pad" />
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput style={styles.input} defaultValue="mahadeva@farmerone.com" keyboardType="email-address" />
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Language Preference</Text>
            <View style={styles.disabledInput}>
              <Text style={styles.inputText}>English & Kannada</Text>
              <Ionicons name="chevron-down" size={20} color="#999" />
            </View>
          </View>
        </View>

        {/* 4. BUSINESS DETAILS */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Business Details / ವ್ಯಾಪಾರ ವಿವರಗಳು</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Business Name</Text>
            <TextInput style={styles.input} defaultValue="Sri Venkateshwara Traders" />
          </View>
          
          <View style={styles.rowGroup}>
            <View style={[styles.inputGroup, styles.halfWidth]}>
              <Text style={styles.label}>Shop Name</Text>
              <TextInput style={styles.input} defaultValue="SVT" />
            </View>
            <View style={[styles.inputGroup, styles.halfWidth]}>
              <Text style={styles.label}>Shop Number</Text>
              <TextInput style={styles.input} defaultValue="A-45" />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Mandi Name</Text>
            <TextInput style={styles.input} defaultValue="APMC Market, Mysuru" />
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>GST Number</Text>
            <TextInput style={styles.input} defaultValue="29ABCDE1234F1Z5" autoCapitalize="characters" />
          </View>
          
          <View style={styles.highlightGroup}>
            <Text style={styles.label}>Default Service Charge (%)</Text>
            <TextInput style={styles.highlightInput} defaultValue="5" keyboardType="numeric" />
          </View>
        </View>

        {/* 5. LOCATION DETAILS */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Location / ಸ್ಥಳ</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Address Line 1</Text>
            <TextInput style={styles.input} defaultValue="Shop A-45, APMC Yard" />
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Address Line 2 (Optional)</Text>
            <TextInput style={styles.input} defaultValue="Bandi Palya" />
          </View>
          
          <View style={styles.rowGroup}>
            <View style={[styles.inputGroup, styles.halfWidth]}>
              <Text style={styles.label}>City</Text>
              <TextInput style={styles.input} defaultValue="Mysuru" />
            </View>
            <View style={[styles.inputGroup, styles.halfWidth]}>
              <Text style={styles.label}>State</Text>
              <TextInput style={styles.input} defaultValue="Karnataka" />
            </View>
          </View>

          <View style={[styles.inputGroup, styles.halfWidth]}>
            <Text style={styles.label}>Pincode</Text>
            <TextInput style={styles.input} defaultValue="570025" keyboardType="numeric" />
          </View>
        </View>

        {/* 6. INFO NOTE */}
        <Text style={styles.footerNote}>
          * Ensure all business details match your official documents.
        </Text>

      </ScrollView>

      {/* 7. ACTION BUTTONS */}
      <View style={styles.footer}>
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.resetBtn}>
            <Text style={styles.resetBtnText}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveBtn}>
            <Text style={styles.saveBtnText}>Save Changes</Text>
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
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  backBtn: { marginRight: 16, padding: 4 },
  headerTextContainer: { flex: 1 },
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
    marginBottom: 16,
  },
  completionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  percentText: { fontSize: 16, fontWeight: 'bold', color: '#2E7D32' },
  progressBarBg: { height: 8, backgroundColor: '#E0E0E0', borderRadius: 4, overflow: 'hidden', marginBottom: 8 },
  progressBarFill: { width: '100%', height: '100%', backgroundColor: '#2E7D32' },
  infoText: { fontSize: 12, color: '#666', fontStyle: 'italic' },
  inputGroup: { marginBottom: 16 },
  rowGroup: { flexDirection: 'row', justifyContent: 'space-between' },
  halfWidth: { width: '48%' },
  label: { fontSize: 14, fontWeight: '500', color: '#555', marginBottom: 6 },
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
  inputText: { fontSize: 15, color: '#111' },
  disabledInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 48,
    backgroundColor: '#FAFAFA',
  },
  highlightGroup: {
    marginBottom: 16,
    backgroundColor: '#E8F5E9',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#C8E6C9',
  },
  highlightInput: {
    borderWidth: 1,
    borderColor: '#A5D6A7',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 48,
    fontSize: 15,
    color: '#2E7D32',
    backgroundColor: '#FFF',
    fontWeight: 'bold',
  },
  footerNote: { fontSize: 12, color: '#888', fontStyle: 'italic', marginBottom: 20, paddingHorizontal: 4 },
  footer: {
    backgroundColor: '#FFF',
    padding: 16,
    paddingBottom: Platform.OS === 'ios' ? 32 : 16,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  actionRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  resetBtn: {
    flex: 1,
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#CCC',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  resetBtnText: { color: '#555', fontSize: 16, fontWeight: 'bold' },
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
