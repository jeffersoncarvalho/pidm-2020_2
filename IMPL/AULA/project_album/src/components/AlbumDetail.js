import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

import Card from './card/Card'
import CardItem from './card/CardItem'
import MyButton from './MyButton'

export default class AlbumDetail extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Card >
                <CardItem>
                    <View style={{ marginLeft: 10, marginRight: 10 }}>
                        <Image style={{ width: 50, height: 50 }}
                            source={{ uri: 'https://raw.githubusercontent.com/san650/ten/master/apps/music/' + this.props.album.image }} />
                    </View>
                    <View style={{ justifyContent: 'space-around' }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{this.props.album.name}</Text>
                        <Text>{this.props.album.artist}</Text>
                    </View>
                </CardItem>
                <CardItem style={{ justifyContent: 'center' }}>
                    <Image style={{ width: 300, height: 300 }}
                        source={{ uri: 'https://raw.githubusercontent.com/san650/ten/master/apps/music/' + this.props.album.image }} />
                </CardItem>
                <CardItem>
                    <MyButton
                        onPress={
                            () =>this.props.navigation.navigate('ModalScreen',
                                                                {albumName:this.props.album.name,
                                                                 albumArtist:this.props.album.artist,
                                                                 albumTracks:this.props.album.links.tracks})
                        }
                    >
                        Ver Músicas
                    </MyButton>
                </CardItem>
                <CardItem>
                    <MyButton
                        onPress={() => alert(this.props.album.id)}
                    >
                        Me Compre!
                    </MyButton>
                </CardItem>
            </Card>

        )
    }
}