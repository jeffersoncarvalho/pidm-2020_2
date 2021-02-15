import React, { Component } from 'react';
import { View } from 'react-native';

import Header from '../Header'
import AlbumList from '../AlbumList'

export default class Modal extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={{ flex: 1}}>
                <Header title='Projeto Álbuns' />
                <AlbumList {...this.props}/>
            </View>
        );
    }
}