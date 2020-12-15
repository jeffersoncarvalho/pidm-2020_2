import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Estilo01 extends Component {
    render() {
        return (
            <View>
                <Text style={estilos.vermelho}>somente vermelho</Text>
                <Text style={estilos.azulGrande}>somente azulGrande</Text>
                <Text style={[estilos.azulGrande, estilos.vermelho]}>azulGrande, depois vermelho</Text>
                <Text style={[estilos.vermelho, estilos.azulGrande]}>vermelho, depois azulGrande</Text>
            </View>
        );
    }
}

const estilos = StyleSheet.create({
    azulGrande: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    vermelho: {
        color: 'red',
    },
});
