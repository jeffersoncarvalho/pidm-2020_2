import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';

export default (props) => {
    let img = { uri: 'https://www.quixada.ufc.br/wp-content/uploads/2015/11/Jo%C3%A3o-240x320.png' } //objeto JSON
    return (
        <View style={{ flexDirection: "row" }}>
            <Image
                source={img}
                style={{ width: 30, height: 30 }}
            />
            <Text>{props.titulo}</Text>
        </View>
    )
}
