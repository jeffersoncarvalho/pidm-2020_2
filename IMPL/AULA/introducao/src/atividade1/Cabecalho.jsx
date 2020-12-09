import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class Cabecalho extends Component{
    render(){
        return(
            <View>
                <Text>Nome: <strong>{this.props.nome}</strong> </Text>
                <Text>Curso: <strong>{this.props.curso}</strong> </Text>
            </View>
        )
    }
}