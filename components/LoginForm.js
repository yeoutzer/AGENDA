import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar} from 'react-native';
import colors from '../Colors';

export default class LoginForm extends Component {
    render() {
        return (
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
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        )
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
    }
});