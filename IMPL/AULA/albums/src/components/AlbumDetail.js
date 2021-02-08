import React,{Component} from 'react'
import {View,Text,StyleSheet,Button} from 'react-native'

import Card from './cards/Card'
import CardItem from './cards/CardItem'

export default class AlbumDetail extends Component {
    render(){
        return(
            <Card>
                <CardItem>
                    <Text>FOTO</Text>
                    <Text>{this.props.album.name}</Text>
                    <Text>{this.props.album.artist}</Text>
                </CardItem>
                <CardItem>
                    <Text>FOTO</Text>
                </CardItem>
                <CardItem>
                    <Button title='Teste'/>
                </CardItem>
            </Card>
        )
    }
}