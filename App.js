import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterPage from './components/RegisterPage';
import Login from './components/Login';
import MainPage from './components/MainPage';
import TodoPage from './components/TodoPage';
import AddListPage from './components/AddListPage';
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB0tAGUsw0gMLHyD0bw0QpBdkqrERunZzo",
    authDomain: "agenda-db8ae.firebaseapp.com",
    databaseURL: "https://agenda-db8ae.firebaseio.com",
    projectId: "agenda-db8ae",
    storageBucket: "agenda-db8ae.appspot.com",
    messagingSenderId: "925766240720",
    appId: "1:925766240720:web:3a15f519b392819eac51d5"
}

firebase.initializeApp(firebaseConfig);

function LoginP({ navigation }) {
    return <Login navigation={navigation} />
}

function RegisterP({ navigation }) {
    return <RegisterPage navigation={navigation} />
}

function MainP({ navigation }) {
    return <MainPage navigation={navigation} />
}

function TodoP({ route, navigation }) {
    const { list, refer } = route.params;
    return <TodoPage navigation={navigation} list={list} refer={refer}/>
}

function AddListP({ route, navigation }) {
    const { refer } = route.params;
    return <AddListPage navigation={navigation} refer={refer}/>
}

const LoginStack = createStackNavigator();
const MainStack = createStackNavigator();
const Stack = createStackNavigator();

function Mains() {
    return (
        <MainStack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }} mode="modal">
            <Stack.Screen name="Main" component={MainP} />
            <Stack.Screen name="Todo" component={TodoP} />
            <Stack.Screen name="AddList" component={AddListP} />
        </MainStack.Navigator>
    );
}

function Logins() {
    return (
        <LoginStack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginP} />
            <Stack.Screen name="Register" component={RegisterP} />
        </LoginStack.Navigator>
    );
}

export default class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Logins" screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Logins" component={Logins} />
                    <Stack.Screen name="Mains" component={Mains} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}