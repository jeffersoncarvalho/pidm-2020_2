import NavegacaoApp from './NavegacaoApp';
import About from './About';
import Modal from './Modal';

import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

/*const Stack = createStackNavigator();

function routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            >
                <Stack.Screen
                    name='Home'
                    component={NavegacaoApp}
                    options={{ title: 'My Home' }}
                />
                <Stack.Screen
                    name='About'
                    component={About}
                    options={About.navigationOptions}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default routes
*/

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();


function MainStackScreen() {
    return (
        <MainStack.Navigator>
            <MainStack.Screen name="Home" component={NavegacaoApp} />
            <MainStack.Screen name="About" component={About} options={About.navigationOptions} />
        </MainStack.Navigator>
    );
}

function RootStackScreen() {
    return (
        <NavigationContainer>
            <RootStack.Navigator mode="modal">
                <RootStack.Screen
                    name="Main"
                    component={MainStackScreen}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen name="MyModal" component={Modal} options={{ headerShown: false }}/>
            </RootStack.Navigator>
        </NavigationContainer>
    );
}


export default RootStackScreen