import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomeScreen from './HomeScreen'
import NotificationsScreen from './NotificationsScreen'

const Gaveta = createDrawerNavigator();

function Routes() {
    return(
        <NavigationContainer>
            <Gaveta.Navigator>
                <Gaveta.Screen name='Home' component={HomeScreen} />
                <Gaveta.Screen name='Notifications' component={NotificationsScreen}/>
            </Gaveta.Navigator>
        </NavigationContainer>
    )
}

export default Routes