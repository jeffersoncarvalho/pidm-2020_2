import React from 'react'
import {View,Text} from 'react-native'

export default (props) => {
    return (
        <View>
            <Text><strong>Nome: </strong> {props.nome} </Text>
            <Text><strong>Curso: </strong> {props.curso} </Text>
        </View>
    )
}