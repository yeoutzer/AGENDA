import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar, Keyboard, TouchableWithoutFeedback } from 'react-native';
import colors from '../Colors';
import * as firebase from 'firebase';

export default class LoginForm extends Component {
    state = {
        email: "",
        password: "",
        error: null
    }

    handleLogin = () => {
        const {email, password} = this.state;

        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(error => this.setState({error: error.message}));
    }

    render() {
        const navigation = this.props.navigation;

        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <View style={styles.error}>
                        {this.state.error && <Text style={{ color: colors.red }}>{this.state.error}</Text>}
                    </View>

                    <StatusBar
                        barStyle='light-content'
                    />

                    <TextInput
                        placeholder='Username'
                        placeholderTextColor='rgba(255,255,255,0.5)'
                        returnKeyType='next'
                        onSubmitEditing={() => this.passwordInput.focus()}
                        autoCapitalize='none'
                        autoCorrect={false}
                        style={styles.input}
                        onChangeText={email => this.setState({ email })}
                        value = {this.state.email}
                    />

                    <TextInput
                        placeholder='Password'
                        placeholderTextColor='rgba(255,255,255,0.5)'
                        returnKeyType='go'
                        secureTextEntry
                        style={styles.input}
                        ref={(input) => this.passwordInput = input}
                        onChangeText={password => this.setState({password})}
                        value ={this.state.password}
                    />

                    <TouchableOpacity
                        style={styles.buttonContainer}
                        //onPress={() => navigation.navigate('Mains')}
                        onPress={this.handleLogin}
                    >
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>

                    <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
                        <Text style={[styles.signUp, { color: colors.gray }]}>
                            Not a member yet?
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text style={[styles.signUp, { color: colors.white }]}> Sign up here!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.5)',
        marginBottom: 10,
        paddingHorizontal: 10,
        color: colors.white,
        borderRadius: 5,
    },
    buttonContainer: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingVertical: 15,
        borderRadius: 5,
    },
    buttonText: {
        textAlign: 'center',
        color: colors.white,
        fontWeight: '700',
    },
    signUp: {
        marginTop: 10,
        fontSize: 15,
    },
    error: {
        margin: 10,
        alignItems: "center",
        justifyContent: "center",
    }
});