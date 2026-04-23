import { useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function Dashboard() {
  const router = useRouter();

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Dashboard</Text>

      <Pressable onPress={() => router.push('/add-stock')}>
        <Text style={{ marginTop: 20 }}>➕ Add Stock</Text>
      </Pressable>

      <Pressable onPress={() => alert("Sell")}>
        <Text style={{ marginTop: 20 }}>💰 Sell Now</Text>
      </Pressable>

      <Pressable onPress={() => alert("Ledger")}>
        <Text style={{ marginTop: 20 }}>📒 Ledger</Text>
      </Pressable>
    </View>
  );
}