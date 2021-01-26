/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//import Routes from './components/stack/Routes'
//import Routes from './components/tab/Routes'
//import Routes from './components/drawer/Routes'
//import LoginScreen from './components/auth/unauthorized/LoginScreen'
import Routes from './components/auth/Routes'

const App = ()=>{
  return(
     
      <SafeAreaProvider>
        <Routes/>
      </SafeAreaProvider>
     
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
