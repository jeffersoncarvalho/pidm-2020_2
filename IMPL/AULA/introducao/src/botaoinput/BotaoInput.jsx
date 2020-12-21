import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

export default class BotaoInput extends Component {

    constructor(props) {
        super(props)
        this.state = {text:''}
        this.acaoBotao = this.acaoBotao.bind(this)

    }

    acaoBotao(){
        alert(this.state.text)
    }

    render() {
        return (
            <View style={estilos.container}>
                
                <Text style={estilos.headerText}>
                    Entrada de Texto com Botão
                    
                </Text>
                <TextInput
                    style={estilos.textInput}
                    onChangeText={(text) => this.setState({ text })}
                    placeholder="Digite o texto"
                />
                <View style={estilos.viewButton}>
                    <Button
                        title="Pegar Texto!"
                        onPress={this.acaoBotao}
                    />
                </View>
            </View>
        )
    }
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e5e5e5"
    },
    headerText: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold"
    },
    textInput: {
        height: 45,
        width: "95%",
        borderColor: "gray",
        borderWidth: 2,
        paddingLeft: 20
    },
    viewButton: {
        width: "93%",
        margin: 15,
        backgroundColor: "red"

    }
});