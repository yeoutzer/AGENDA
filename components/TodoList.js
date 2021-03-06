import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import moment from 'moment';

export default class TodoList extends React.Component {
    state = {
        showListVisible: false
    };

    deleteList(list) {
        let refer = this.props.refer;

        refer.doc(list.id).delete();
    }

    render() {
        const list = this.props.list;
        const navigation = this.props.navigation;
        const completedCount = list.todos.filter(todo => todo.completed).length;
        const remainingCount = list.todos.length - completedCount;
        const countdown = moment(list.date).diff(moment(), 'days') + 1;

        return (
            <View>
                <View style={[styles.listContainer, { borderColor: list.color }]}>
                    <Text style={[styles.listTitle],
                    {
                        color: list.color,
                        fontSize: 24,
                        fontWeight: '700',
                        flex: 1,
                        justifyContent: 'flex-end'
                    }} numberOfLines={1}>
                        {list.name}
                    </Text>

                    <View style={{flex: 4, justifyContent: 'center'}}>
                        <View style={{ alignItems: 'center', flex: 1 }}>
                            <Text style={[styles.count, { color: list.color }]}>{remainingCount}</Text>
                            <Text style={[styles.subtitle, { color: list.color }]}>Remaining</Text>
                        </View>

                        <View style={{ alignItems: 'center', flex: 1 }}>
                            <Text style={[styles.count, { color: list.color }]}>{completedCount}</Text>
                            <Text style={[styles.subtitle, { color: list.color }]}>Completed</Text>
                        </View>

                        <View style={{ alignItems: 'center', flex: 1 }}>
                            {list.remind == true
                                ? <Text style={[styles.count, { color: list.color }]}>
                                    {countdown >= 0 ? countdown : 'Overdue'}
                                </Text>
                                : null}
                            {list.remind == true && countdown >= 0
                                ? <Text style={[styles.subtitle, { color: list.color }]}>Countdown</Text>
                                : null}
                        </View>
                    </View>
                    
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                            style={[styles.editList, {borderColor: colors.blue}]}
                            onPress={() => navigation.navigate('Todo', {list: list, refer: this.props.refer})}
                        >
                            <Text style = {[styles.subtitle, {color : colors.blue}]}>Edit</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.deleteList, {borderColor: colors.red}]}
                            onPress={() => Alert.alert('Delete Task', 'Confirm delete task?', [
                                { text: 'Yes', onPress: () => this.deleteList(list) },
                                { text: 'No' }
                            ])}
                        >
                            <Text style = {[styles.subtitle, {color: colors.red}]}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
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
        flex: 0.85,
    },
    listTitle: {
        fontSize: 40,
        fontWeight: '900',
        marginBottom: 25,
    },
    count: {
        fontSize: 40,
        fontWeight: '200',
    },
    subtitle: {
        fontSize: 12,
        fontWeight: '700',
    },
    editList: {
        borderWidth: 2,
        borderRadius: 4,
        padding: 10,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 50,
    },
    deleteList: {
        borderWidth: 2,
        borderRadius: 4,
        padding: 10,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 70,
    }
});