import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

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
        flex: 1,
        alignSelf: 'stretch',

        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',

        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',

        color: '#007aff',

        fontSize: 18,
        fontWeight: 'bold',

        paddingTop: 5,
        paddingBottom: 5
    }
})