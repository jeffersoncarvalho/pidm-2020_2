import React, {Component} from 'react'
import {View,Text} from 'react-native'

import { SafeAreaProvider } from 'react-native-safe-area-context'

import Routes from './components/crud/Routes'

export default class App extends Component{
  render(){
    return(
      <SafeAreaProvider>
        <Routes/>
      </SafeAreaProvider>
       
    )
  }
}