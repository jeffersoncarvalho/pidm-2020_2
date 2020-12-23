import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Hello from './src/hello/Hello';
import Imagem from './src/imagem/Imagem';
import Estudante from './src/props/Estudante';
import EstudanteComFuncao from './src/props/EstudanteComFuncao';
import SomaSubtrai from './src/state/SomaSubtrai';

import Cabecalho from './src/atividade1/Cabecalho';
import Corpo from './src/atividade1/Corpo';
import Disciplina from './src/atividade1/Disciplina';
import Estilo01 from './src/estilos/Estilo01';
import Estilo02 from './src/estilos/Estilo02';
import Estilo03 from './src/estilos/Estilo03';
import Estilo04 from './src/estilos/Estilo04';
import Atividade02 from './src/atividade2/Atividade02';
import CalculadoraApp from './src/imc/CalculadoraApp'
import TradutorPizza from './src/pizza/TradutorPizza'
import BotaoInput from './src/botaoinput/BotaoInput';
import Tocavel from './src/tocaveis/Tocavel';
import MeuScroll from './src/scroll/MeuScroll';
import MinhaFlatList from './src/listas/MinhaFlatList';
import MeuFetch from './src/fetch/MeuFetch';

export default function App(){
  return(
    <MeuFetch/>
  )
}

/*export default function App(){
  return(
    <MinhaFlatList/>
  )
}*/

/*export default function App(){
  return(
    <MeuScroll/>
  )
}*/

/*export default function App() {
  return (
    <Tocavel/>
  );
}*/

/*export default function App() {
  return (
    <BotaoInput/>
  );
}*/

/*
export default function App() {
  return (
    <TradutorPizza/>
  );
}*/

/*export default function App() {
  return (
    <CalculadoraApp/>
  );
}*/

/*export default function App() {
  return (
    <Atividade02/>
  );
}
*/
/*export default function App() {
  return (
    <View style={styles.container}>
      <Hello />
      <Imagem />
      <Estudante
        nome='J. Vilnei'
        curso='Gastronomia'
        IRA='8.4'
      />
      <br />
      <EstudanteComFuncao
        nome='J. Vilnei'
        curso='Design Digital'
        IRA='7.4'
      />
    </View>
  );
}*/

/*export default function App() {
  return (
    <View style={styles.container}>
      <SomaSubtrai />
    </View>
  );
}*/

/*export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho nome='J. Vilnei' curso='Design Digital'/>
      <Corpo/>
      <Disciplina nome='Fundamentos de Programação'/>
      <Disciplina nome='Programação de Scripts'/>
      <Disciplina nome='História da Arte'/>
    </View>
  );
}*/



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
