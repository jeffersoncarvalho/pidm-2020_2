import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

export default class LoginScreen extends Component {

    constructor() {
        super()
        this.state = { login: '', password: '' }
        //this.acaoBotao = this.acaoBotao.bind(this)
    }

    acaoBotao = ()=>{
        alert(this.state.login+'-'+this.state.password)    
    }

    render() {
        return (
            <View style={estilos.container}>
                <Text style={estilos.headerText}>Efetue o seu Login</Text>
                <Text style={estilos.labelText}>Login</Text>
                <TextInput
                    style={estilos.textInput}
                    onChangeText={
                        (login) => this.setState({ login })
                    }
                    placeholder='login'
                />
                <Text style={estilos.labelText}>Senha</Text>
                <TextInput
                    style={estilos.textInput}
                    onChangeText={
                        (password) => this.setState({ password })
                    }
                    placeholder='senha'
                />
                <View style={{flex:1,marginTop:25}}>
                    <Button 
                        title="Efetuar Login"
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#e5e5e5'
    },
    headerText: {
        fontSize: 20,
        margin: 10,
        fontWeight: 'bold'
    },
    labelText: {
        fontSize: 14,
        margin: 10,
    },
    textInput: {
        height: 45,
        width: '95%',
        borderColor: 'gray',
        borderWidth: 2,
        paddingLeft: 20
    }
})