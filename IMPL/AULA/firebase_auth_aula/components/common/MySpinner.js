import React, { Component } from 'react';
import { Text, ActivityIndicator } from 'react-native';

class MySpinner extends Component {
    render() {
        return (
            <ActivityIndicator size='large' color='red'/>
        )
    }
}

export {MySpinner}