import React from 'react';
import { Text, View, StyleSheet, ActivityIndicator, Button } from 'react-native';
import * as firebase from 'firebase';

export default class LoadingPage extends React.Component {
    /*componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'Mains' : 'Logins');
        })
    }*/

    render() {
        return(
            <View style = {styles.container}>
                <Text>Loading Test...</Text>
                <ActivityIndicator size='large'></ActivityIndicator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
})