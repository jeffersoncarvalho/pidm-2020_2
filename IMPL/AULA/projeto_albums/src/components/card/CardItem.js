import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
class CardItem extends Component {
    render() {
        return (
            <View style={[styles.container,this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        padding: 5,

        backgroundColor: '#fff',
        borderColor: '#ddd',
        
        position: 'relative',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    }
})
export default CardItem;