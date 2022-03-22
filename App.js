import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {  StatusBar, StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';

export default function App() {
  return (
    <>
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar/> 
      </View>
      <View style={styles.list}>
        <Text> lists</Text>
      </View>
    </SafeAreaView>
    <ExpoStatusBar style='auto'/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
    marginTop: StatusBar.currentHeight
  },
  search : {padding: 16, backgroundColor:"green"},
  list: {flex:1, padding: 16, backgroundColor:"blue"}
});
