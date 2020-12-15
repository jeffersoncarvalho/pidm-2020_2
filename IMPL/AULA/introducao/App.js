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

export default function App() {
  return (
    <Estilo04/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
