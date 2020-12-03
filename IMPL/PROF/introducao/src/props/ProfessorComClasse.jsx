import React, {Component} from 'react'
import {Text,View} from 'react-native'

export default class ProfessorComClasse extends Component {
 
    render(){

        return(
            <View>
                <h1>Classes</h1>
                <Text><strong>Nome: </strong> {this.props.nome} </Text>
                <Text><strong>Curso: </strong> {this.props.curso} </Text>
            </View>
        )
    }
}