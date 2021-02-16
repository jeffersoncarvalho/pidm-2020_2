import React, { Component } from 'react'
import { View, Text } from 'react-native'

import MyButton from '../MyButton'
import Card from '../card/Card'
import CardItem from '../card/CardItem'

export default class ModalScreen extends Component {
    render() {
        return (
            <Card>
                <CardItem>
                    <Text style={{fontSize:30}}>
                        {this.props.route.params.albumName}
                        {this.props.route.params.albumTracks}
                    </Text>    
                </CardItem>
                <CardItem>
                    <Text>Lista de Música</Text>
                </CardItem>
                <CardItem>
                    <MyButton
                        onPress={() => this.props.navigation.goBack()}
                    >
                        Voltar
                    </MyButton>
                </CardItem>
            </Card>
        )
    }
}