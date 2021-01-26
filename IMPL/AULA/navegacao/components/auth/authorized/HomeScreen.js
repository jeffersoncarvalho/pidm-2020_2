import React, {Component} from 'react'
import {View,Text, Button} from 'react-native'

export default class HomeScreen extends Component{
    render(){
        return (
            <View
                style={{
                    flex:1,
                    justifyContent:'center',
                    alignItems:'center'
                }}
            >
                <Text
                    style={{fontSize:24}}
                >
                    Bem-Vindo à Home Screen!
                </Text>

                <Button
                    onPress={
                        () => this.props.navigation.navigate('Settings')
                    }
                    title="Ir para Settings"
                />
            </View>
        )
    }
}