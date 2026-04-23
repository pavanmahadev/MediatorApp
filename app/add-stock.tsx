import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

export default function AddStock() {
  const [qty, setQty] = useState('');
  const [price, setPrice] = useState('');
  const [charge, setCharge] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const q = Number(qty);
    const p = Number(price);
    const c = Number(charge);

    const total = q * p;
    const serviceCharge = (total * c) / 100;
    const final = total - serviceCharge;

    setResult({ total, serviceCharge, final });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Add Stock</Text>

      <TextInput
        placeholder="Quantity (kg)"
        keyboardType="numeric"
        onChangeText={setQty}
        style={{ borderWidth: 1, marginTop: 15, padding: 10 }}
      />

      <TextInput
        placeholder="Price per kg"
        keyboardType="numeric"
        onChangeText={setPrice}
        style={{ borderWidth: 1, marginTop: 15, padding: 10 }}
      />

      <TextInput
        placeholder="Service Charge (%)"
        keyboardType="numeric"
        onChangeText={setCharge}
        style={{ borderWidth: 1, marginTop: 15, padding: 10 }}
      />

      <Pressable
        onPress={calculate}
        style={{ backgroundColor: 'green', padding: 15, marginTop: 20 }}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>
          Calculate
        </Text>
      </Pressable>

      {result && (
        <View style={{ marginTop: 20 }}>
          <Text>Total: ₹{result.total}</Text>
          <Text>Service Charge: ₹{result.serviceCharge}</Text>
          <Text>Final Payable: ₹{result.final}</Text>
        </View>
      )}
    </View>
  );
}