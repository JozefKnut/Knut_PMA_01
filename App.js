import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';

export default function App() {
  const [counter,setCount]=useState(0)
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20}}> Počítadlo objednávok
      </Text>
      <StatusBar style="auto" />
      <Text style={counter >= 5 ? styles.red  : styles.nored}> {counter}
      </Text>
      <Button
        title="+"
        onPress={() => setCount(counter + 1)}
        color="#221584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        title="-"
        color="#221584"
        onPress={() => setCount(counter - 1)}
        disabled={counter === 0 ? true : false}
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        title="Vynulovať"
        onPress={() => setCount(0)}
        color="#221584"
        accessibilityLabel="Learn more about this purple button"
      />
      {counter >= 5 && <Text style={styles.warning}>Dosiahnutý limit</Text>}
      

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
  red:{fontSize:100, color:"red"},
  nored:{fontSize:100},
  warning:{color:"red"}
});
