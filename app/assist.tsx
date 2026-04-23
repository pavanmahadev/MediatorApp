import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function AssistScreen() {
  const router = useRouter();
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Help & Support</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.infoCard}>
          <Ionicons name="headset" size={40} color="#2e7d32" style={{ marginBottom: 10 }} />
          <Text style={styles.infoTitle}>How can we help you?</Text>
          <Text style={styles.infoSub}>Our team is available 24/7 to assist you with any issues.</Text>
        </View>

        <View style={styles.formCard}>
          <Text style={styles.sectionTitle}>Send us a message</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Name</Text>
            <TextInput placeholder="Your full name" style={styles.input} />
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput placeholder="Your mobile number" keyboardType="phone-pad" style={styles.input} />
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Message</Text>
            <TextInput 
              placeholder="Describe your issue..." 
              style={[styles.input, styles.textArea]} 
              multiline 
              numberOfLines={4} 
            />
          </View>
          
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitText}>Submit Request</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.contactRow}>
          <TouchableOpacity style={styles.contactMethod}>
            <Ionicons name="call" size={24} color="#2e7d32" />
            <Text style={styles.contactText}>Call Us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactMethod}>
            <Ionicons name="logo-whatsapp" size={24} color="#2e7d32" />
            <Text style={styles.contactText}>WhatsApp</Text>
          </TouchableOpacity>
        </View>
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
  infoCard: { alignItems: 'center', backgroundColor: 'white', padding: 20, borderRadius: 15, marginBottom: 20, elevation: 2 },
  infoTitle: { fontSize: 18, fontWeight: 'bold', color: '#111', marginBottom: 8 },
  infoSub: { fontSize: 14, color: '#666', textAlign: 'center' },
  formCard: { backgroundColor: 'white', padding: 20, borderRadius: 15, elevation: 2, marginBottom: 20 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 15 },
  inputGroup: { marginBottom: 15 },
  label: { fontSize: 14, color: '#666', marginBottom: 5 },
  input: { backgroundColor: '#f9f9f9', borderWidth: 1, borderColor: '#eee', borderRadius: 10, padding: 12, fontSize: 16 },
  textArea: { height: 100, textAlignVertical: 'top' },
  submitButton: { backgroundColor: '#2e7d32', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 10 },
  submitText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  contactRow: { flexDirection: 'row', justifyContent: 'space-between' },
  contactMethod: { flex: 1, backgroundColor: 'white', marginHorizontal: 5, padding: 15, borderRadius: 10, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', elevation: 1 },
  contactText: { marginLeft: 10, fontWeight: 'bold', color: '#333' }
});
