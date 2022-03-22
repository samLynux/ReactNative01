import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{alignItems:"center", justifyContent:"center", backgroundColor:"blue"}}>
        <Text> Search</Text>
      </View>
      <View style={{flex:1, alignItems:"center", justifyContent:"center", backgroundColor:"green"}}>
        <Text> list</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});
