import React, { Component } from 'react'
import { View, Text, FlatList, Button } from 'react-native'

import firestore from '@react-native-firebase/firestore'

import Card from './cards/Card'
import CardItem from './cards/CardItem'
import MyButton from './MyButton'

export default class FirebaseApp extends Component {

    constructor(props) {
        super(props)
        this.state = { name: '', users: [] }
    }

    componentDidMount() {
        this.getUsers()
    }

    deleteUser(id) {
        firestore()
            .collection('users')
            .doc(id)
            .delete()
            .then(() => {
                console.log('User deleted!');
            });
    }

    updateUser(id, name) {
        firestore()
            .collection('users')
            .doc(id)
            .update({
                name
            })
            .then(() => {
                console.log('User updated!');
            });
    }

    getUsers() {
        firestore()
            .collection('users')
            .get()
            .then(querySnapshot => {
                //console.log('Total users: ', querySnapshot.size)
                let users = []
                querySnapshot.forEach(documentSnapshot => {
                    //console.log('User ID: ', documentSnapshot.id, documentSnapshot.data())
                    users.push(documentSnapshot.data())
                })
                this.setState({ users })
            })
    }

    renderUsers() {
        return (
            <FlatList
                data={this.state.users}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text style={{ fontSize: 16 }}>{item.name}</Text>
                        </View>

                    )
                }}
                keyExtractor={(item, index) => item + index}
            />
        )
    }

    addUser = () => {

        let name = 'Usuário Novo Novamente!'
        firestore()
            .collection('users')
            .add({
                name
            })
            .then(() => {
                console.log('User added!');
            });
        this.getUsers()

    }

    getUserV2() {
        this.subscriber = firestore().collection('users')
            .doc('Oq2JAekJ88bmKWpEfVHY').onSnapshot(
                (doc) => {
                    this.setState({ name: doc.data().name })
                }
            )
    }

    getUserV1 = async () => {
        const userDocument = await firestore().collection('users')
            .doc('Oq2JAekJ88bmKWpEfVHY').get()
        console.log(userDocument)
        this.setState({ name: userDocument._data.name })
    }

    render() {
        return (
            <Card>
                <CardItem>
                    {this.renderUsers()}

                </CardItem>
                <CardItem style={{ justifyContent: 'center' }}>
                    <MyButton
                        title='Add User' onPress={this.addUser}
                    />
                </CardItem>
                <CardItem style={{ justifyContent: 'center' }}>
                    <MyButton
                        title='Delete User' onPress={this.addUser}
                    />
                </CardItem>
                <CardItem style={{ justifyContent: 'center' }}>
                    <MyButton
                        title='Edit User' onPress={this.addUser}
                    />
                </CardItem>
            </Card>
        )
    }
}