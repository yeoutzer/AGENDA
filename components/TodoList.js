import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../Colors';

export default TodoList = ({list}) => {
    const completedCount = list.todos.filter(todo => todo.completed).length;
    const remainingCount = list.todos.length - completedCount;
    return (
        <View style={[styles.listContainer, {borderColor: list.color}]}>
            <Text style={[styles.listTitle], {color: list.color}} numberOfLines={1}>
                {list.name}
            </Text>
            <View>
                <View style={{alignItems: 'center'}}>
                    <Text style={[styles.count, {color: list.color}]}>{remainingCount}</Text>
                    <Text style={[styles.subtitle, {color: list.color}]}>Remaining</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={[styles.count, {color: list.color}]}>{completedCount}</Text>
                    <Text style={[styles.subtitle, {color: list.color}]}>Completed</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    {list.remind == true
                        ? <Text style={[styles.count, {color: list.color}]}>
                            {Math.floor((list.date.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))}
                        </Text>
                        : null}
                    {list.remind == true
                        ? <Text style={[styles.subtitle, {color: list.color}]}>Countdown</Text>
                        : null}
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        paddingVertical: 32,
        paddingHorizontal: 16,
        borderRadius: 6,
        borderWidth: 2,
        marginHorizontal: 12,
        alignItems: 'center',
        width: 300,
    },
    listTitle: {
        fontSize: 24,
        fontWeight: '700',
        //color: colors.white,
        marginBottom: 18,
    },
    count: {
        fontSize: 48,
        fontWeight: '200',
        //color: colors.white,
        marginTop: 10,
    },
    subtitle: {
        fontSize: 12,
        fontWeight: '700',
        //color: colors.white,
    },
});