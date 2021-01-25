import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: 'bold'
                    }}
                >
                    Página Home com Tabs.
                </Text>
                <Button
                    title="Ir para Settings"
                    onPress={() => this.props.navigation.navigate('Settings')}
                />
                <Button
                    title="Ir para Detalhes"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        )
    }
}