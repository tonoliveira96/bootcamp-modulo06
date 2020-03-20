
import React from 'react';
import { Platform, StyleSheet, View,Text} from 'react-native';

export default function App(){
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React</Text>
      <Text style={styles.welcome}>Abaixo</Text>
    </View>
);
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  welcome:{
    fontSize: 20,
    textAlign: 'center',
    margin:0
  }
});
