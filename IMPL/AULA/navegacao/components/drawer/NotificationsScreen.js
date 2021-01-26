import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class NotificationsScreen extends Component {
    render() {
        return (
            <View style={{ 
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center' 
            }}>
                <Text>Tela Notifications com Drawer!</Text>
                <Button
                    onPress={
                        () => this.props.navigation.goBack()
                    }
                    title="Back..."
                />
            </View>
        )
    }
}