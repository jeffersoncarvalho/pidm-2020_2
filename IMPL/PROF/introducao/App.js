import React from 'react';
import { StyleSheet, View } from 'react-native';
//import Hello from './src/hello/Hello'
//import Imagem from './src/imagem/Imagem'
//import Professor from './src/props/Professor'
//import ProfessorComClasse from './src/props/ProfessorComClasse'
import SomaSubtrai from './src/state/SomaSubtrai'

export default function App() {
  return (
    <View style={styles.container}>
      <SomaSubtrai/>
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
