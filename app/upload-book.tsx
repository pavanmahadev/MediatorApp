import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function UploadBook() {
  const router = useRouter();
  const { type } = useLocalSearchParams();

  const isPurchase = type === 'purchase';
  const headerTitle = isPurchase ? 'Purchase Book' : 'Sale Book';
  const headerSubtitle = isPurchase ? 'Record a new purchase' : 'Record a new sale';
  const dateLabel = isPurchase ? 'Purchase Date' : 'Sale Date';
  const submitText = isPurchase ? 'Submit Purchase Book' : 'Submit Sale Book';

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>{headerTitle}</Text>
          <Text style={styles.headerSubtitle}>{headerSubtitle}</Text>
        </View>
        <View style={styles.placeholder} />
      </View>

      <View style={styles.content}>
        {/* DATE SECTION */}
        <Text style={styles.sectionLabel}>{dateLabel}</Text>
        <TouchableOpacity style={styles.dateInput}>
          <Ionicons name="calendar-outline" size={20} color="#2196F3" />
          <Text style={styles.dateText}>24/04/2026</Text>
        </TouchableOpacity>

        {/* UPLOAD SECTION */}
        <Text style={styles.sectionLabel}>Upload Document</Text>
        <TouchableOpacity style={styles.uploadCard}>
          <View style={styles.iconCircle}>
            <Ionicons name="cloud-upload" size={28} color="#2196F3" />
          </View>
          <Text style={styles.uploadTitle}>Tap to upload documents</Text>
          <Text style={styles.uploadSubtitle}>PDF, JPG, PNG</Text>
        </TouchableOpacity>

        {/* SUBMIT BUTTON */}
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitText}>{submitText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB', // Very light background matching screenshot
  },
  header: {
    backgroundColor: '#2E7D32',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 50 : 40,
    paddingBottom: 20,
    paddingHorizontal: 16,
  },
  backButton: {
    padding: 4,
    zIndex: 10,
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
    marginLeft: -28, // Offset the back button to center text perfectly
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#E8F5E9',
    marginTop: 2,
  },
  placeholder: {
    width: 24,
  },
  content: {
    padding: 20,
    flex: 1,
  },
  sectionLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    marginTop: 20,
  },
  dateInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 16,
    height: 54,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  dateText: {
    fontSize: 16,
    color: '#555',
    marginLeft: 12,
  },
  uploadCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#F0F0F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E3F2FD',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  uploadTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
  },
  uploadSubtitle: {
    fontSize: 12,
    color: '#999',
    marginTop: 6,
  },
  submitButton: {
    backgroundColor: '#388E3C', // vibrant green
    borderRadius: 10,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    shadowColor: '#388E3C',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  submitText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});
