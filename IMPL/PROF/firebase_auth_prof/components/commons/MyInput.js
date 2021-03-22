import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

class MyInput extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>
                    {this.props.label}
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder={this.props.placeholder}
                    onChangeText={this.props.onChangeText}
                    secureTextEntry={this.props.secureTextEntry}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        height:40
    },
    label:{
        flex:1,

        fontSize:18,
        paddingLeft:10,
        paddingBottom:6
    },
    input:{
        flex:4,

        fontSize:18,
        color:'#000',

        paddingLeft:5,
        paddingRight:5,
        
    }
})

export { MyInput }