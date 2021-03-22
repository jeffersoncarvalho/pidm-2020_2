import React, {Component} from 'react'
import {View,ActivityIndicator} from 'react-native'

class MySpinner extends Component{
    render(){
        return(
            <View 
                style={{
                    flex:1,
                    justifyContent:'center',
                    alignItems:'center'
                }}
            >
                <ActivityIndicator size='large' color='#000'/>
            </View>
        )
    }
}

export {MySpinner}