import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';
import {MultiTap} from 'react-native-tap';

export default function App() {
  const onSingleTap = () => {
    Alert.alert("1 Tap", "Pressed one time!", [{text: "ok"}])
  }

  const onDoubleTap = () => {
    Alert.alert("2 Taps", "Pressed two times!", [{text: "ok"}])
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MultiTap onSingleTap={onSingleTap} onDoubleTap={onDoubleTap}>
        <View style={styles.box}>
          <Text>Tap Me!</Text>
        </View>
      </MultiTap>
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
  box: {
    width: 100,
    height: 100,
    borderRadius: 8,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center', 
  }
});
