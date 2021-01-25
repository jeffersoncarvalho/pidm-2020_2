import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons'

import HomeScreen from './HomeScreen'
import SettingsScreen from './SettingsScreen'
import DetailsScreen from './DetailsScreen'

const PilhaHome = createStackNavigator()
const PilhaSettings = createStackNavigator()

function PilhaHomeScreen() {
    return (
        <PilhaHome.Navigator>
            <PilhaHome.Screen name='Home' component={HomeScreen} />
            <PilhaHome.Screen name='Details' component={DetailsScreen} />
        </PilhaHome.Navigator>
    )

}

function PilhaSettingsScreen() {
    return (
        <PilhaSettings.Navigator>
            <PilhaSettings.Screen name='Settings' component={SettingsScreen} />
            <PilhaSettings.Screen name='Details' component={DetailsScreen} />
        </PilhaSettings.Navigator>
    )
}

const Tab = createBottomTabNavigator()
export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'ios-information-circle'
                                : 'ios-information-circle-outline';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'ios-list-circle' : 'ios-list-circle-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}

                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray'
                }}
            >
                <Tab.Screen name="Home" component={PilhaHomeScreen} />
                <Tab.Screen name="Settings" component={PilhaSettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

/*const Tab = createBottomTabNavigator()

export default function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                      let iconName;

                      if (route.name === 'Home') {
                        iconName = focused
                          ? 'ios-information-circle'
                          : 'ios-information-circle-outline';
                      } else if (route.name === 'Settings') {
                        iconName = focused ? 'ios-list-circle' : 'ios-list-circle-outline';
                      }

                      // You can return any component that you like here!
                      return <Ionicons name={iconName} size={size} color={color} />;
                    },
                  })}

                tabBarOptions={{
                    activeTintColor:'tomato',
                    inactiveTintColor:'gray'
                }}
            >
                <Tab.Screen name='Home' component={HomeScreen} options={{ tabBarBadge: 3 }} />
                <Tab.Screen name='Settings' component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>

    )
}*/
