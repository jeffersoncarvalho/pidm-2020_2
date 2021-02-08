import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>
                    {this.props.title}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewStyle:{
        justifyContent: 'center',
        alignItems: 'center',

        height:60,
        paddingTop:15,
        elevation: 10,
        
        backgroundColor:'#f2f2f2'
    },
    textStyle:{
        fontSize: 20,
        fontWeight: 'bold'
    }
})
