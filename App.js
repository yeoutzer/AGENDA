import React from 'react';
import { View, Text, ActivityIndicator, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingPage from './components/LoadingPage';
import RegisterPage from './components/RegisterPage';
import Login from './components/Login';
import MainPage from './components/MainPage'

function Loading() {
    return <LoadingPage />
}

function LoginPage({ navigation }) {
    return <Login navigation = {navigation} />
}

function Register({ navigation }) {
    return <RegisterPage navigation = {navigation}/>
}

function Main({ navigation }) {
    return <MainPage navigation = {navigation}/>
}

const Stack = createStackNavigator();

export default class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName = "LoginPage" screenOptions={{headerShown:false}}>
                    <Stack.Screen name="LoginPage" component={LoginPage} />
                    <Stack.Screen name="Register" component={Register} />
                    <Stack.Screen name="Main" component={Main} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}