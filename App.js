import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [count, setCount] = useState(0);
  const [offline, setOffline] = useState(false);

  return (
    <View style={styles.container}>
      <View style={{flexDirection: "row"}}>
        <Button title="+" onPress={() => setCount(count + 1)} />
        <Text style={{marginLeft: 25, marginRight: 25}}>Count: {count}</Text>
        <Button title="-" onPress={() => setCount(count - 1)} />
      </View>
      <Button title={offline ? "go online (ofline rn)" : "go offline (online rn)"} onPress={() => setOffline(!offline)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
