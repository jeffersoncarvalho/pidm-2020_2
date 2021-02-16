//https://raw.githubusercontent.com/san650/ten/master/apps/music/api/albums.json

import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

import AlbumDetail from './AlbumDetail'

export default class AlbumList extends Component {

    constructor(props) {
        super(props)
        this.state = { albums: [] }
    }

    componentDidMount() {
        return fetch('https://raw.githubusercontent.com/san650/ten/master/apps/music/api/albums.json')
            .then(response => response.json())
            .then(responseJson => this.setState({ albums: responseJson.albums }))
    }

    /*renderAlbums() {
        return this.state.albums.map(
            (album) => {
                return (
                    <AlbumDetail key={album.id} album={album} />
                )
            }
        )
    }*/

    render() {
        return (
            <FlatList 
                data={this.state.albums}
                renderItem = {({item})=><AlbumDetail album={item} {...this.props}/> } 
                keyExtractor = {(index,item)=>index+item}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        paddingTop: 15,

        backgroundColor: '#f2f2f2',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2
    },
    header: {
        fontSize: 20
    }

})