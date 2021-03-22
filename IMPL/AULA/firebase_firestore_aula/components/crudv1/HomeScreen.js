import React, { Component } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import auth from '@react-native-firebase/auth';

import LoginApp from '../auth/LoginApp'
import Card from '../card/Card'
import CardItem from '../card/CardItem'
import MyButton from '../card/MyButton'

export default class HomeScreen extends Component {

  constructor(props) {
    super(props)
    this.state = { loading: true }
  }

  renderLoginResponse() {
    if (this.state.loading) {
      return (
        <Card>
          <CardItem>
            <ActivityIndicator size='large' color='red' />
            <Text>Loading...</Text>
          </CardItem>
        </Card>
      )
    }
    return (
      <Card>
        <CardItem style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <LoginApp />
        </CardItem>
        <CardItem style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <MyButton title='Create User' onPress={this.createUserWithEmailAndPassword} />
          <MyButton title='Logoff' onPress={this.logOff}/>
        </CardItem>
      </Card>
    )
  }

  createUserWithEmailAndPassword = () => {
    auth()
      .signInWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  }

  logOff = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }

  logIn = () => {

  }

  anonymouslyLogin() {
    auth()
      .signInAnonymously()
      .then(() => {
        console.log('User signed in anonymously');
        this.setState({ loading: false })
      })
      .catch(error => {
        if (error.code === 'auth/operation-not-allowed') {
          console.log('Enable anonymous in your firebase console.');
        }
        console.error(error);
      });
  }

  componentDidMount() {
    this.anonymouslyLogin()
  }

  render() {
    return (
      <View>
        {this.renderLoginResponse()}
      </View>
    )
  }
}