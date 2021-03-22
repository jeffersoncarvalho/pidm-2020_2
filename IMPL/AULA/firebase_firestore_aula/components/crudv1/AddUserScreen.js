import React, { Component } from 'react';
import { Text, TextInput } from 'react-native';

import MyButton from '../card/MyButton'
import Card from '../card/Card'
import CardItem from '../card/CardItem'


export default class AddUserScreen extends Component {
    
    constructor(props){
        super(props)
        this.state = {name:''}
    }

    render() {
        return (
            <Card>
                <CardItem>
                    <Text>Add User</Text>
                </CardItem>
                <CardItem>
                <TextInput
                    onChangeText={(text) => this.setState({ text })}
                    placeholder='Enter name'
                />
                </CardItem>
                <CardItem>
                    <MyButton title='Add User'/>
                    <MyButton title='Back' onPress={() => this.props.navigation.goBack()}/>
                </CardItem>

            </Card>

             
        )
    }
}