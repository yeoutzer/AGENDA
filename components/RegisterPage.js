import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../Colors';

export default class RegisterPage extends React.Component {
    render() {
        const navigation = this.props.navigation;

        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                    <TouchableOpacity 
                        style={{ position: 'absolute', top: 32, left: 32, zIndex: 10 }}
                        onPress = {() => navigation.goBack()}
                    >
                        <Ionicons name="md-arrow-back" size={24} color={colors.white} />
                    </TouchableOpacity>
                    <View style={styles.logoContainer}>
                        <Image
                            style={styles.logo}
                            source={require('../images/logo_nowords.png')}
                            resizeMode='contain'
                        />
                        <Text style={styles.title}>Welcome to AGENDA!</Text>
                    </View>
                    <View style={styles.formContainer}>
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
                            returnKeyType='next'
                            secureTextEntry
                            style={styles.input}
                            ref={(input) => this.passwordInput = input}
                        />
                        <TextInput
                            placeholder='Confirm Password'
                            placeholderTextColor='rgba(255,255,255,0.5)'
                            returnKeyType='go'
                            secureTextEntry
                            style={styles.input}
                            ref={(input) => this.passwordInput = input}
                        />
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('LoginPage')}>
                            <Text style={styles.buttonText}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'flex-end',
        marginBottom: 50,
    },
    logo: {
        height: 150,
    },
    title: {
        color: colors.white,
        marginTop: 10,
        textAlign: 'center',
        opacity: 0.6,
        fontSize: 20,
    },
    formContainer: {
        flex: 1,
        marginBottom: 150,
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
})