import { useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function Index() {
  const router = useRouter();

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>Mediator App 🚀</Text>

      <Pressable onPress={() => router.push('/dashboard')}>
        <Text style={{ marginTop: 20, color: 'green' }}>
          Go to Dashboard →
        </Text>
      </Pressable>
    </View>
  );
}