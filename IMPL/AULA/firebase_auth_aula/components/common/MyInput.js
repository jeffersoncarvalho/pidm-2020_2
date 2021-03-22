import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

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
                />
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
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
            paddingBottom:6 //gambiarra pro lineHeight
        },
        input:{
            flex:4,

            color:'#000',
            fontSize:18,

            paddingLeft:5,
            paddingRight:5,
            lineHeight:23 //não funciona
        }
    }
)

export { MyInput }