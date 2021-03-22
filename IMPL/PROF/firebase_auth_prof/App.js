import React, {Component} from 'react'
import {View,Text} from 'react-native'

import {Header} from './components/commons'
import LoginForm from './components/LoginForm'

export default class App extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <Header title='Aula de Auth' />
        <LoginForm />
      </View> 
    )
  }
}