import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './HomeScreen'
import ModalScreen from './ModalScreen'

const MainStack = createStackNavigator()
const RootStack = createStackNavigator()

function MainStackScreens() {
    return(
        <MainStack.Navigator>
            <MainStack.Screen 
                name = 'HomeScreen'
                component = {HomeScreen}
                options = {{headerShown:false}}
            />
        </MainStack.Navigator>
    )
}

function RootStackScreens() {
    return(
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen
                    name = 'MainStackScreens'
                    component = {MainStackScreens}
                    options = {{headerShown:false}} 
                />
                <RootStack.Screen 
                    name = 'ModalScreen'
                    component = {ModalScreen}
                    options = {{headerShown:false}}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default RootStackScreens