import React, {Component} from 'react'
import {View,Text,Button} from 'react-native'

export default class SettingsScreen extends Component {
    render(){
        return(
            <View
                style={{
                    flex:1,
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center'
                }} 
            >
                <Text
                    style={{
                        fontSize:18,
                        fontWeight:'bold'
                    }}
                >
                    Página Settings.
                </Text>
                <Button
                    title="Ir para Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Ir para Detalhes"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        )
    }
}