import React, { Component } from 'react'
import { Alert, View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'

export default class Tocavel extends Component {

    apertouBotao() {
        alert('Você apertou o botão!')
    }

    pressionouBotao(){
        alert('Você pressionou o botão')
    }

    render() {
        return (
            <View style={estilos.container}>

                <TouchableHighlight underlayColor='white' onPress={this.apertouBotao}>
                    <View style={estilos.button}>
                        <Text style={estilos.buttonText}>
                            TouchableHighlight
                        </Text>
                    </View>
                </TouchableHighlight>

                <TouchableOpacity onPress={this.apertouBotao}>
                    <View style={estilos.button}>
                        <Text style={estilos.buttonText}>
                            TouchableOpacity
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableHighlight underlayColor='white' 
                                    onPress={this.apertouBotao}
                                    onLongPress={this.pressionouBotao}>
                    <View style={estilos.button}>
                        <Text style={estilos.buttonText}>
                            TouchableHighlight
                        </Text>
                    </View>
                </TouchableHighlight>

                <TouchableWithoutFeedback onPress={this.apertouBotao}>
                    <View style={estilos.button}>
                        <Text style={estilos.buttonText}>
                            TouchableWithoutFeedback
                        </Text>
                    </View>
                </TouchableWithoutFeedback>

            </View>
        )
    }
}

const estilos = StyleSheet.create({
    container: {
        paddingTop: 60,
        alignItems: 'center'
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 20,
        color: 'white'

    }
});