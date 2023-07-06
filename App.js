import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IntroScreen from './Views/IntroScreen';
import MainScreen from './Views/MainScreen';

export default function App() {
  const [isloaded, setIsloaded] = useState(false)
  setTimeout(() => {
    setIsloaded(true)
  },2000 );
  return (
    <View style={styles.container}>
      {isloaded ? <MainScreen/> : <IntroScreen/>}
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
});
