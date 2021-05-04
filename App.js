import React from 'react';
import { StyleSheet, View, Image, } from 'react-native';
import  logo  from './assets/tree_logo.png'
import Home from './components/home/Home'


export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{width: 150, height: 241}} />

      <Home/>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#93E7C9',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
