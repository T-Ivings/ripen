import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

  export default function Home () {
    return (
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Text>Hello</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>World</Text>
        </TouchableOpacity>
      </View>
      
    )
  }

const styles =  StyleSheet.create({
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
})