import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Logo from './Logo';

export default class About extends Component {

    //static navigationOptions = {headerTitle: <Text style={{fontWeight:"bold", color:"black", fontSize:20}}>About in JSX</Text>}
    static navigationOptions = {
        headerTitle: <Logo titulo="Sobre de Novo" />,
        headerRight: () => <Button onPress={() => alert('Um botão!')}
            title="Info"
            color="#000"
        />,
    }



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

                    Sobre - {this.props.route.params.nome}
                </Text>

                <Button title="Ir pro About... de novo?"
                    onPress={
                        () => this.props.navigation.navigate('About', { ...this.props.route.params })}
                />

                <Button title="Push"
                    onPress={() => this.props.navigation.push('About', { ...this.props.route.params })}
                />

                <Button title="Back"
                    onPress={() => this.props.navigation.goBack()}
                />
                <Button
                    onPress={() => this.props.navigation.navigate('MyModal')}
                    title="Open Modal"
                />
            </View>
        )
    }
}