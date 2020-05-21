import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import moment from 'moment';
import TodoModal from "./TodoModal"

export default class TodoList extends React.Component {
    state = {
        showListVisible: false
    };

    toggleListModal() {
        this.setState({ showListVisible: !this.state.showListVisible });
    }

    render() {
        const list = this.props.list;
        const completedCount = list.todos.filter(todo => todo.completed).length;
        const remainingCount = list.todos.length - completedCount;

        return (
            <View>
                <Modal
                    animationType="slide"
                    visible={this.state.showListVisible}
                    onRequestClose={() => this.toggleListModal()}
                >

                    <TodoModal
                        list={list}
                        closeModal={() => this.toggleListModal()}
                        updateList={this.props.updateList}
                    />
                </Modal>
                <TouchableOpacity
                    style={[styles.listContainer, { borderColor: list.color }]}
                    onPress={() => this.toggleListModal()}
                >
                    <Text style={[styles.listTitle],
                    {
                        color: list.color,
                        fontSize: 24,
                        fontWeight: '700',
                        marginVertical: 15,
                    }} numberOfLines={1}>
                        {list.name}
                    </Text>

                    <View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={[styles.count, { color: list.color }]}>{remainingCount}</Text>
                            <Text style={[styles.subtitle, { color: list.color }]}>Remaining</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={[styles.count, { color: list.color }]}>{completedCount}</Text>
                            <Text style={[styles.subtitle, { color: list.color }]}>Completed</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            {list.remind == true
                                ? <Text style={[styles.count, { color: list.color }]}>
                                    {moment(list.date).diff(moment(), 'days') + 1}
                                </Text>
                                : null}
                            {list.remind == true
                                ? <Text style={[styles.subtitle, { color: list.color }]}>Countdown</Text>
                                : null}
                        </View>

                    </View>
                </TouchableOpacity>
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
        height: 400,
    },
    listTitle: {
        fontSize: 40,
        fontWeight: '900',
        marginBottom: 25,
    },
    count: {
        fontSize: 48,
        fontWeight: '200',
        marginTop: 10,
    },
    subtitle: {
        fontSize: 12,
        fontWeight: '700',
    },
});