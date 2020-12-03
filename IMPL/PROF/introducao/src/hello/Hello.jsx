import React, { Component } from 'react'
import { Text, View } from 'react-native'

//Usando funções
//v1
/*export default function hello(){
    return (
        <View>
            <Text>
                Olá Mundo do React Native!
            </Text>
        </View>
    )
}*/
//v2
/*function hello(){
    return (
        <View>
            <Text>
                Olá Mundo do React Native V2!
            </Text>
        </View>
    )
}

export default hello;*/
//v3
/*export default () => {
    return (
        <View>
            <Text>
                Olá Mundo do React Native!
            </Text>
        </View>
    )
}*/

//Usando classes
export default class Hello extends Component {
    render() {
        return (
            <View>
                <Text>
                    Olá Mundo do React Native com <strong>Classes</strong>!
                </Text>
            </View>
        )
    }
}