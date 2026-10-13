import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Zadaj ulohu..." />
        <Button title="ADD"/>
      </View>

      <View style={styles.taskContainer}>
        <Text>Udalosti .:::</Text>
      </View>
      <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  input:{borderWidth:3, width:"80%",},
  inputContainer:{flex:1, flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingHorizontal:10,},
  taskContainer:{flex:3},
  
});