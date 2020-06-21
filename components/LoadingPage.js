import React from 'react';
import { Text, View, StyleSheet, ActivityIndicator, Button } from 'react-native';
import * as firebase from 'firebase';
import colors from '../Colors';

export default class LoadingPage extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Loading Test...</Text>
                <ActivityIndicator size='large' color={colors.blue}></ActivityIndicator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})