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
        borderColor: '#ccc',

        marginLeft: 5,
        marginRight: 5,
        marginTop: 2,
        marginBottom: 3,

        elevation: 3
    },
    textStyle: {
        alignSelf: 'center',

        color: '#000',

        fontSize: 18,
        fontWeight: 'bold',

        paddingTop: 5,
        paddingBottom: 5
    }
})