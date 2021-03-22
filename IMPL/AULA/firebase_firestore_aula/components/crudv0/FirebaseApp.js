import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'

import firestore from '@react-native-firebase/firestore'

import Card from '../card/Card'
import CarItem from '../card/CardItem'
import MyButton from '../card/MyButton'
import CardItem from '../card/CardItem'

export default class FirebaseApp extends Component {

  constructor(props) {
    super(props)
    //this.getUserV1()
    //this.getUserV2()
    //this.listUsers()
    this.state = { name: '', users: [] }
  }

  componentDidMount() {
    this.listUsers()
  }

  getUserV1 = async () => {
    const userDocument = await firestore().collection('users')
      .doc('lu4JwMroBSPDeNdUN0KY').get()
    //console.log(userDocument._data.name)
    this.setState({ name: userDocument._data.name })
  }

  getUserV2() {
    this.subscriber = firestore().collection('users')
      .doc('lu4JwMroBSPDeNdUN0KY').onSnapshot(
        (doc) => {
          this.setState({ name: doc.data().name })
        }
      )
  }

  listUsers() {
    firestore()
      .collection('users')
      .get()
      .then(querySnapshot => {
        //console.log('Total users: ', querySnapshot.size);
        let users = []
        querySnapshot.forEach(
          documentSnapshot => {
            //console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
            users.push(documentSnapshot.data())
          }
        );
        this.setState({ users })
      });
  }

  renderUsers() {
    return (
      <FlatList
        data={this.state.users}
        renderItem={
          ({ item }) => {
            return (
              <View>
                <Text style={{ fontSize: 18 }}>{item.name}</Text>
              </View>
            )
          }
        }
        keyExtractor={(item, index) => item + index}
      />
    )
  }

  addUser = () => {
    firestore()
      .collection('users')
      .add({
        name: 'João Marcelo',
      })
      .then(() => {
        console.log('User added!');
      });
    this.listUsers()
  }

  updateUser = () => {
    firestore()
      .collection('users')
      .doc('I6B683Xpmc3dH4cPV7IU')
      .update({
        name: 'Fulano de Tal da Silva',
      })
      .then(() => {
        console.log('User updated!');
      });
    this.listUsers()
  }

  deleteUser = () => {
    firestore()
      .collection('users')
      .doc('I6B683Xpmc3dH4cPV7IU')
      .delete()
      .then(() => {
        console.log('User deleted!');
      });
      this.listUsers()
  }

  render() {
    return (
      <Card>
        <CardItem>
          {this.renderUsers()}
        </CardItem>
        <CardItem>
          <MyButton title='Add User' onPress={this.addUser} />
        </CardItem>
        <CardItem>
          <MyButton title='Update User' onPress={this.updateUser} />
        </CardItem>
        <CardItem>
          <MyButton title='Delete User' onPress={this.deleteUser}/>
        </CardItem>
      </Card>
    )
  }
}