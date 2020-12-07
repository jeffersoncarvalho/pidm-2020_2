import React from 'react'
import { View, Text } from 'react-native'

export default (props) => {

    return (
        <View>
            <Text>Nome: <strong>{props.nome}</strong> </Text>
            <Text>Curso: <strong>{props.curso}</strong> </Text>
            <Text>IRA: <strong>{props.IRA}</strong> </Text>
        </View>
    )

}
