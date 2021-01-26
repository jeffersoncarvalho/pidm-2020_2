import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AsyncStorage from '@react-native-community/async-storage'

import Login from './unauthorized/Login'
import Signup from './unauthorized/Signup'
import HomeScreen from './authorized/HomeScreen'

const UnathorizedStack = createStackNavigator()
const AuthorizedStack = createStackNavigator()
const RootStack = createStackNavigator()

function UnathorizedStackScreens() {
    return (
        <UnathorizedStack.Navigator>
            <UnathorizedStack.Screen name='Login' component={Login}/>
            <UnathorizedStack.Screen name='Signup' component={Signup} />
        </UnathorizedStack.Navigator>
    )
}

function AuthorizedStackScreens() {
    return (
        <AuthorizedStack.Navigator>
            <AuthorizedStack.Screen name='Home' component={HomeScreen} />
        </AuthorizedStack.Navigator>
    )
}

class Routes extends Component {
    constructor() {
        super()
        this.state = { hasToken: false }
        //this.clearStorage()
    }

    componentDidMount() {
        this.readData()
    }

    readData = async () => {
        try {
            const token = await AsyncStorage.getItem('TOKEN')
            this.setState({ hasToken: token !== null })
        } catch (e) {
            alert('Failed to fetch the data from storage')
        }
    }

    clearStorage = async () => {
        try {
            await AsyncStorage.clear()
            alert('Storage successfully cleared!')
        } catch (e) {
            alert('Failed to clear the async storage.')
        }
    }

    render() {
        return (
            <NavigationContainer>
                <RootStack.Navigator>
                    {
                        this.state.hasToken ?
                            <RootStack.Screen name='Authorized' component={AuthorizedStackScreens} />
                            :
                            <RootStack.Screen name='Unauthorized' component={UnathorizedStackScreens} />
                    }
                </RootStack.Navigator>
            </NavigationContainer>
        )
    }
}

export default Routes