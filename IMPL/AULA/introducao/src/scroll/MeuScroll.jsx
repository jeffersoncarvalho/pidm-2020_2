import React, { Component } from 'react';
import { ScrollView, Image, Text, View } from 'react-native';




export default class MeuScroll extends Component {
    render() {
        const aragao = 'https://www.quixada.ufc.br/wp-content/uploads/2015/05/Aragão-240x320.png'
        return (
            <View>
                <Text style={{ fontSize: 96 }}>
                    Scroll me plz
                </Text>
                <Image source={{uri: aragao, width: 64, height: 64}} />
                <Image source={{uri: aragao, width: 64, height: 64}} />
                <Image source={{uri: aragao, width: 64, height: 64}} />
                <Image source={{uri: aragao, width: 64, height: 64}} />
                <Image source={{uri: aragao, width: 64, height: 64}} />
                <Image source={{uri: aragao, width: 64, height: 64}} />
                <Image source={{uri: aragao, width: 64, height: 64}} />
                <Image source={{uri: aragao, width: 64, height: 64}} />
                <Image source={{uri: aragao, width: 64, height: 64}} />
                <Image source={{uri: aragao, width: 64, height: 64}} />
                <Image source={{uri: aragao, width: 64, height: 64}} />
                <Image source={{uri: aragao, width: 64, height: 64}} />
                <Image source={{uri: aragao, width: 64, height: 64}} />
                <Image source={{uri: aragao, width: 64, height: 64}} />
                <Image source={{uri: aragao, width: 64, height: 64}} />
                <Image source={{uri: aragao, width: 64, height: 64}} />
                <Image source={{uri: aragao, width: 64, height: 64}} />
            </View>
        )
    }
}