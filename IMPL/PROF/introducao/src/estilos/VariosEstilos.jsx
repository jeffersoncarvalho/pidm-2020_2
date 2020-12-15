import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native'

export default class VariosEstilos extends Component {
    render() {
        return (
            <View>
                <Text style={estilos.vermelho}>just red</Text>
                <Text style={estilos.azulGrande}>just bigBlue</Text>
                <Text style={[estilos.azulGrande, estilos.vermelho]}>bigBlue, then red</Text>
                <Text style={[estilos.vermelho, estilos.azulGrande]}>red, then bigBlue</Text>
            </View>
        )
    }
}

const estilos = StyleSheet.create({
    azulGrande: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30
    },
    vermelho: {
        color: 'red'
    }
})