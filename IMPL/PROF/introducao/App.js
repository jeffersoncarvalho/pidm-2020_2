import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Atividade02 from './src/atividade02/Atividade02';
//import FlexBasico from './src/estilos/FlexBasico';
//import VariosEstilos from './src/estilos/VariosEstilos';
//import Hello from './src/hello/Hello'
//import Imagem from './src/imagem/Imagem'
//import Professor from './src/props/Professor'
//import ProfessorComClasse from './src/props/ProfessorComClasse'
//import SomaSubtrai from './src/state/SomaSubtrai'

export default function App() {
  return (
    <View style={styles.container}>
       <Atividade02/>
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
