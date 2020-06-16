import React, { Component } from 'react';
import { 
    StyleSheet,
    View,
    Image,
    Text,
    KeyboardAvoidingView, 
    Keyboard, 
    TouchableWithoutFeedback, 
    StatusBar, 
    TextInput, 
    TouchableOpacity 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../Colors';
import * as firebase from 'firebase';

export default class RegisterPage extends React.Component {
    state = {
        email: "",
        password: "",
        //confirmPassword: "",
        error: null
    }

    handleSignUp = () => {
        const {email, password} = this.state;

        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(error => this.setState({error: error.message}));
    }

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

                    <View style={styles.error}>
                        {this.state.error && <Text style={{ color: colors.red }}>{this.state.error}</Text>}
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
                            onChangeText={email => this.setState({ email: email })}
                            value = {this.state.email}
                        />

                        <TextInput
                            placeholder='Password'
                            placeholderTextColor='rgba(255,255,255,0.5)'
                            returnKeyType='next'
                            secureTextEntry
                            style={styles.input}
                            ref={(input) => this.passwordInput = input}
                            onChangeText={password => this.setState({ password: password })}
                            value ={this.state.password}
                        />

                        {/*<TextInput
                            placeholder='Confirm Password'
                            placeholderTextColor='rgba(255,255,255,0.5)'
                            returnKeyType='go'
                            secureTextEntry
                            style={styles.input}
                            ref={(input) => this.passwordInput = input}
                            onChangeText={cpassword => this.setState({cpassword})}
                            value ={this.state.confirmPassword}
                        />*/}

                        <TouchableOpacity
                            style={styles.buttonContainer}
                            //onPress={() => navigation.goBack()}
                            onPress={this.handleSignUp}
                        >
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
    error: {
        margin: 10,
        alignItems: "center",
        justifyContent: "center",
    }
})