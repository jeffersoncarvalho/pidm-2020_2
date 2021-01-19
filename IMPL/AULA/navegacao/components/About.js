import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
export default class About extends Component {
    render() {
        return (
            <View style={
                {
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text style={
                    {
                        fontWeight: "bold",
                        fontSize: 18
                    }}>
                    Sobre - {this.props.navigation.getParam('noe','Wladimir')}
                </Text>

                <Button title="Ir pro About... de novo?"
                        onPress={
                            () => this.props.navigation.navigate('About')}
                />

                <Button title="Push"
                        onPress={() => this.props.navigation.push('About')}
                />

                <Button title="Back"
                        onPress={() => this.props.navigation.goBack()}
                />
            </View>
        )
    }
}