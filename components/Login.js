import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView} from 'react-native';
import LoginForm from './LoginForm';
import colors from '../Colors';

export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../images/logo_nowords.png')}
                        resizeMode='contain'
                    />
                    <Text style={styles.title}>Welcome to AGENDA!</Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm/>
                </View>
            </KeyboardAvoidingView>
        )
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
    }

})