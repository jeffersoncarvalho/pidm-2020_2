import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class Estudante extends Component{
    
    render(){
        return(
            <View>
                <Text>Nome: <strong>{this.props.nome}</strong> </Text>
                <Text>Curso: <strong>{this.props.curso}</strong> </Text>
                <Text>IRA: <strong>{this.props.IRA}</strong> </Text>
            </View>
        )
    }
}