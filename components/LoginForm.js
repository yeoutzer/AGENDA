import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar, Keyboard, TouchableWithoutFeedback } from 'react-native';
import colors from '../Colors';

export default class LoginForm extends Component {
    render() {
        const navigation = this.props.navigation;

        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
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
                    />
                    <TextInput
                        placeholder='Password'
                        placeholderTextColor='rgba(255,255,255,0.5)'
                        returnKeyType='go'
                        secureTextEntry
                        style={styles.input}
                        ref={(input) => this.passwordInput = input}
                    />
                    <TouchableOpacity style={styles.buttonContainer} onPress = {() => navigation.navigate('Main')}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>

                    <View style = {{alignSelf: 'center', flexDirection: 'row'}}>
                        <Text style = {[styles.signUp, {color: colors.gray}]}>
                            Not a member yet?
                        </Text>
                        <TouchableOpacity onPress = {() => navigation.navigate('Register')}>
                            <Text style = {[styles.signUp, {color: colors.white}]}> Sign up here!</Text>
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
    }
});