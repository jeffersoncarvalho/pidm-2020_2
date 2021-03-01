import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'

export default class CardItem extends Component {
    render() {
        return (
            <View style={[styles.containerStyle,this.props.style]}>
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative',

        borderBottomWidth: 1,
        padding: 5,
        
        backgroundColor: '#fff',
        borderColor: '#ddd',
        
    }
});

