import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const App = ()=>{
  return (
    <View style={estilos.container}>
      <Text style={estilos.text}>
        Jefferson de Carvalho
      </Text>
    </View>
  )
}

const estilos = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default App;
