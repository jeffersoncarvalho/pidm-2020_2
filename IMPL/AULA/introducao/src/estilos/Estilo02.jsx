import React, { Component } from 'react';
import { View } from 'react-native';

export default class Estilo02 extends Component {
    render() {
        return (
            <View>
                <View style={{ width: 50, height: 50, backgroundColor: 'red' }} />
                <View style={{ width: 100, height: 100, backgroundColor: 'orange' }} />
                <View style={{ width: 150, height: 150, backgroundColor: 'green' }} />
            </View>
        );
    }
}
