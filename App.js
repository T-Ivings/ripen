
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';
import  logo  from './assets/tree_logo.png'

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{width: 150, height: 241}} />

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
         <Text>Hello</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>World</Text>
        </TouchableOpacity>
        </View>
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
  buttons: {
    width: 240,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,

  },
  button: {
    backgroundColor: '#00E492',
    width: '50%',
    alignItems: 'center',
    borderWidth: 4,
    borderRadius: 25


  }
});
