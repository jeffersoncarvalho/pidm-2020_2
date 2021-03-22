import React, {Component} from 'react'
import {View,Text} from 'react-native'

import {Header} from './components/common'
import LoginForm from './components/LoginForm'

export default class App extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <Header title='Aula de Autenticação'/>
        <LoginForm />
      </View> 
    )
  }
}