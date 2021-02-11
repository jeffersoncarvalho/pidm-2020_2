import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

import AlbumDetail from './AlbumDetail'

export default class AlbumList extends Component {

    constructor(props){
        super(props)
        this.state = {albums:[]}
    }

    componentDidMount(){
        fetch('https://raw.githubusercontent.com/san650/ten/master/apps/music/api/albums.json')
        .then(
            (response) => {
                return response.json()
            } 
        )
        .then(
            (responseJson) => {
                this.setState({albums:responseJson.albums})
            }
        )
    }

    /*renderAlbuns(){
        if(this.state.albums && this.state.albums[2]){
            return (
                <View>
                    <Text style={{fontSize:30}}>
                    {this.state.albums[2].name}
                    </Text>
                </View>
            )
        }
    }*/

    render() {
        return (
            <FlatList
                data = {this.state.albums}
                renderItem = {
                    ({item})=>{
                        return (
                           <AlbumDetail album={item} {...this.props}/> 
                        )
                    }
                }
                keyExtractor = {
                    (index,item)=>{
                        return index+item
                    }
                }
            />
        )
    }
}