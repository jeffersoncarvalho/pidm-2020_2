import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Card, CardItem, MyButton, MyInput, MySpinner } from './commons'

import auth from '@react-native-firebase/auth';

export default class LoginForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            loading: false,
            error: ''
        }
    }

    acaoBotaoLogin = () => {
        this.setState({ loading: true })
        //tentativa de login com e-mail e senha
        auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((user) => {
                console.log(user)
                this.setState({ loading: false })
            })
            .catch(
                //usuário não existe.
                (error) => {
                    console.log(error)
                    this.setState({ error: error.message })
                    this.setState({ loading: false })
                    auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                        .then((user) => {
                            console.log(user)
                            this.setState({ loading: false })
                        })
                        .catch(
                            (error) => {
                                console.log(error)
                                this.setState({ error: error.message })
                                this.setState({ loading: false })
                            }
                        )
                }
            )
    }

    renderBotaoLogin() {
        if (this.state.loading) {
            return (
                <MySpinner />
            )
        }
        return (
            <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <MyButton
                    title='Log In'
                    onPress={this.acaoBotaoLogin}
                />
                {this.renderError()}
            </View>
        )
    }

    renderError() {
        if (this.state.error && this.state.error != '')
            return (
                <Text style={{ fontSize: 12, color: 'red', alignSelf: 'center' }}>
                    {this.state.error}
                </Text>
            )
    }

    render() {
        return (
            <Card>
                <CardItem>
                    <MyInput
                        label='E-mail'
                        placeholder='Entre com seu e-mail.'
                        onChangeText={email => this.setState({ email })}
                    />
                </CardItem>
                <CardItem>
                    <MyInput
                        label='Senha'
                        placeholder='Entre com sua senha.'
                        onChangeText={password => this.setState({ password })}
                        secureTextEntry={true}
                    />
                </CardItem>
                <CardItem style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    {this.renderBotaoLogin()}
                </CardItem>
            </Card>
        )
    }
}