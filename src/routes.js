import * as React from 'react';
// import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import User from './pages/User';
import Main from './pages/Main';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Main"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#7159c1',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        flex: 1,
                    },
                    // headerWrapper: {
                    //     flex: 1,
                    // },
                    // headerText: {
                    //     textAlign: 'center', // ok
                    //     alignSelf: 'center', // ok
                    // },
                    // headerLayoutPreset: 'center',
                }}>
                <Stack.Screen
                    name="Main"
                    component={Main}
                    // options={{
                    //     title: 'Changed',
                    //     headerLayoutPreset: 'center',
                    //     headerStyle: {
                    //         backgroundColor: '#7159c1',
                    //     },
                    //     headerTintColor: '#fff',
                    // }}
                />
                <Stack.Screen name="User" component={User} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
