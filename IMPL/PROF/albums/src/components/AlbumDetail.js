import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'

import Card from './cards/Card'
import CardItem from './cards/CardItem'
import MyButton from './MyButton'

export default class AlbumDetail extends Component {
    render() {
        return (
            <Card>
                <CardItem>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{marginLeft:0,marginRight:15}}>
                            <Image
                                style={{ width: 60, height: 60 }}
                                source={{ uri: 'https://raw.githubusercontent.com/san650/ten/master/apps/music/images/ramones-ramones.jpg' }}
                            />
                        </View>
                        <View style={{justifyContent:'space-around'}}>
                            <Text style={{fontSize:20,fontWeight:'bold'}}>{this.props.album.name}</Text>
                            <Text style={{fontSize:16}}>{this.props.album.artist}</Text>
                        </View>
                    </View>
                </CardItem>
                <CardItem style={{justifyContent:'center'}}>
                    <Image
                        style={{ width: 300, height: 300 }}
                        source={{ uri: 'https://raw.githubusercontent.com/san650/ten/master/apps/music/' + this.props.album.image }}
                    />
                </CardItem>
                <CardItem>
                    <MyButton 
                        title='Ver Músicas'
                        onPress={
                            ()=>{
                                //alert('Você clicou em ' + this.props.album.links.tracks)
                                return this.props.navigation.navigate(
                                    'ModalScreen',
                                    {tracks:this.props.album.links.tracks,
                                     name: this.props.album.name
                                    })
                            }
                        }
                        />
                </CardItem>
                <CardItem>
                    <MyButton 
                        title='Me Compre!'
                        onPress={
                            ()=>{
                                alert('Você clicou em ' + this.props.album.name)
                            }
                        }
                        />
                </CardItem>
            </Card>
        )
    }
}