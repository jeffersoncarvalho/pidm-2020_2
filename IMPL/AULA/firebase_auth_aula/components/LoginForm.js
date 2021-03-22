import React, { Component } from 'react'
import { TextInput, Text, View } from 'react-native'
import { Card, CardItem, MyButton, MyInput, MySpinner } from './common'

import auth from '@react-native-firebase/auth'

export default class LoginForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            error: null,
            loading: false
        }
    }

    signInButtonAction = () => {
        auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(
                (user) => {
                    alert('Usuário ' + user.user.email + ' logado com sucesso!')
                }
            ) //signInWithEmailAndPassword
            .catch(
                (error) => {
                    console.log(error.message)
                    this.setState({ error: error.message })
                    auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                        .then(
                            (user) => {
                                console.log(user)
                            }
                        ) //createUserWithEmailAndPassword
                        .catch(
                            (error) => {
                                console.log(error.message)
                                this.setState({ error: error.message })
                            }
                        ) //createUserWithEmailAndPassword 
                }
            )//signInWithEmailAndPassword
    }

    renderButton() {
        if (this.state.loading) {
            return (
                <MySpinner />
            )
        }
        return (
            <View>
                <Text style={{ fontSize: 14, alignSelf: 'center', color: 'red' }}>
                    {this.state.error}
                </Text>
                <MyButton
                    title='Sign In'
                    onPress={this.signInButtonAction}
                />
            </View>

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
                    />
                </CardItem>
                <CardItem style={{ flexDirection: 'column', alignItems: 'center' }}>
                    {this.renderButton()}
                </CardItem>
            </Card>
        )
    }
}