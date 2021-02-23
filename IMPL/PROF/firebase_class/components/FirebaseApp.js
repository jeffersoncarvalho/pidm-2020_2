import React, { Component } from 'react'
import { View, Text } from 'react-native'

import firestore from '@react-native-firebase/firestore'

export default class FirebaseApp extends Component {

    constructor(props) {
        super(props)
        this.getUser()
        this.state = { name: '' }
    }

    getUser = async () => {
        const userDocument = await firestore().collection('users')
            .doc('Oq2JAekJ88bmKWpEfVHY').get()
        console.log(userDocument)
        this.setState({ name: userDocument._data.name })
    }

    render() {
        return (
            <View>
                <Text >
                    {this.state.name}
                </Text>
            </View>
        )
    }
}