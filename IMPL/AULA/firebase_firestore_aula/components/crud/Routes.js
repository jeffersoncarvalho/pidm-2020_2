import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import ListUserScreen from './ListUserScreen'
import EditUserScreen from './EditUserScreen'
import AddUserScreen from './AddUserScreen'


const MainStack = createStackNavigator()


function MainStackScreens() {
    return(
        <NavigationContainer>
            <MainStack.Navigator>
                <MainStack.Screen 
                    name = 'ListUserScreen'
                    component = {ListUserScreen}
                    options = {{headerShown:false}}
                />
                <MainStack.Screen 
                    name = 'EditUserScreen'
                    component = {EditUserScreen}
                    options = {{headerShown:false}}
                />
                <MainStack.Screen 
                    name = 'AddUserScreen'
                    component = {AddUserScreen}
                    options = {{headerShown:false}}
                />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}


export default MainStackScreens