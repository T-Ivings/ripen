import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Touchable } from 'react-native';
import logo from './assets/tree_logo.png'
import { Icon, InlineIcon } from '@iconify/react';
import carrotIcon from '@iconify/icons-dashicons/carrot';
import fruitWatermelon from '@iconify/icons-mdi/fruit-watermelon';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{width: 150, height: 241}} />

      <View style={styles.buttons}>
        <TouchableOpacity>
          <Icon icon={fruitWatermelon} style={{color: '#ffffff', fontSize: '40px'}} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon icon={carrotIcon} style={{color: '#ffffff', fontSize: '40px'}} />
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
    marginTop: 20
  }
});
