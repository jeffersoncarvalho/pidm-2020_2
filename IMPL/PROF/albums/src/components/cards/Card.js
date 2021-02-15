import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'

export default class Card extends Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,

        elevation: 1,

        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
})
