import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../Colors';

export default Reminder = ({list}) => {
    const date = list.date + '/' + list.month + '/' + list.year;
    const time = list.hour + ':' + (list.min < 10 ? '0' + list.min : list.min);
    return (
        <View style={styles.container}>
            <Text style = {styles.event}>{list.event}</Text>
            <View style={styles.timeContainer}>
                <Text style={styles.date}>{date}</Text>
                <Text style={styles.time}>{time}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 3,
        margin:  8,
        flexDirection: 'row',
        width: 350,
        justifyContent: 'center',
    },
    event: {
        justifyContent: 'center',
        flex: 2,
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: 'flex-start',
        color: colors.black,
    },
    timeContainer: {
        flex: 1,
        alignSelf: 'flex-end',
        flexDirection: 'column',
        marginVertical: 3,
        width: 50,
    },
    date: {
        fontSize: 15,
        fontWeight: '400',
        alignSelf: 'flex-end',
        color: colors.black,
    },
    time: {
        fontSize: 12,
        alignSelf: 'flex-end',
        color: colors.black,
    },
});