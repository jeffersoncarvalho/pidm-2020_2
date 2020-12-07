import React, { Component } from 'react'
import { View, Text } from 'react-native'

//usando FUNÇÕES

//v1
/*export default function hello(){
    return (
        <View>
            <Text>Olá mundo do React-Native, V1.</Text>
        </View>
    )

}*/

//v2
/*function hello(){
    return  <View>
                <Text>Olá mundo do React-Native, V2.</Text>
            </View>
}
export default hello*/

//v3.1
/*export default () => {
    return (
        <View>
            <Text>Olá mundo do React-Native, V3.1.</Text>
        </View>
    )
}*/

//v3.2
/*export default () =>
    <View>
        <Text>Olá mundo do React-Native, V3.2.</Text>
    </View>*/

//usando CLASSES

export default class Hello extends Component{

    render(){
        
        return (
            <View>
                <Text>Olá mundo do React-Native, com CLASSES.</Text>
            </View>
        )

    }

}
