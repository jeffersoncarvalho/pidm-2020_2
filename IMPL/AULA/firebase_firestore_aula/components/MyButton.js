import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class MyButton extends Component {
    render() {
        return (
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={this.props.onPress}
            >
                <Text style={styles.textStyle}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        
        width:100,
        backgroundColor: '#fff',
        borderRadius: 1,
        borderWidth: 1,
        borderColor: '#c0c0c0',
        margin: 5,
       
    },
    textStyle: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 18,
        fontWeight:'bold',
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10

    }
});