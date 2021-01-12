/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View,Text, StyleSheet} from 'react-native';

const App = ()=>{
  return(
    <View style={estilos.container}>
      <Text style={estilos.texto}>
        Jefferson de Carvalho Silva
      </Text>
    </View>
  )
}

const estilos = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  texto:{
    fontSize:24,
    fontFamily:'Arial'
  }
});

export default App;
