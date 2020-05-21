<<<<<<< HEAD
import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, KeyboardAvoidingView, TextInput } from "react-native";
import { AntDesign, Ionicons } from '@expo/vector-icons';
import colors from "../Colors";

export default class TodoModal extends React.Component {
    state = {
        name: this.props.list.name,
        color: this.props.list.color,
        remind: this.props.list.remind,
        date: this.props.list.date,
        todos: this.props.list.todos
    }

    renderTodo = todo => {
        return (
            <View style={styles.todoContainer}>
                <TouchableOpacity>
                    <Ionicons
                        name={todo.completed ? "ios-square" : "ios-square-outline"}
                        size={24}
                        color={colors.gray}
                        style={{ width: 32 }}
                    />
                </TouchableOpacity>
                <Text style={[styles.todo,
                {
                    textDecorationLine: todo.completed ? "line-through" : "none",
                    color: todo.completed ? colors.gray : colors.black
                }]}
=======
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    KeyboardAvoidingView,
    TextInput,
    Keyboard
} from 'react-native';
import {AntDesign, Ionicons} from '@expo/vector-icons';
import colors from '../Colors';

export default class TodoModal extends React.Component {
    state = {
        newTodo: ''
    };

    toggleTodoCompleted = index => {
        let list = this.props.list
        list.todos[index].completed = !list.todos[index].completed

        this.props.updateList(list);
    }

    addTodo = () => {
      let list = this.props.list;
      list.todos.push({title: this.state.newTodo, completed: false});

      this.props.updateList(list);
      this.setState({newTodo: ''});

      Keyboard.dismiss();
    };

    renderTodo = (todo, index) => {
        return (
            <View style={styles.todoContainer}>
                <TouchableOpacity onPress={() => this.toggleTodoCompleted(index)}>
                    <Ionicons
                        name={todo.completed ? 'ios-square' : 'ios-square-outline'}
                        size={24}
                        color={colors.gray}
                        style={{width: 32}}
                    />
                </TouchableOpacity>

                <Text
                    style={[
                        styles.todo,
                        {
                            textDecorationLine: todo.completed ? 'line-through' : 'none',
                            color: todo.completed ? colors.gray : this.props.list.color
                        }
                    ]}
>>>>>>> a1bba0be05aa3e5b9a7d9a0ccd26274d910f81c6
                >
                    {todo.title}
                </Text>
            </View>
        );
    };

    render() {
<<<<<<< HEAD
        const taskCount = this.state.todos.length
        const completedCount = this.state.todos.filter(todo => todo.completed).length

        return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity
                    style={{ position: 'absolute', top: 64, right: 32, zIndex: 10 }}
                    onPress={this.props.closeModal}
                >
                    <AntDesign name="close" size={24} color={colors.black} />
                </TouchableOpacity>

                <View style={[styles.section, styles.header, { borderBottomColor: this.state.color }]}>
                    <View>
                        <Text style={styles.title}>{this.state.name}</Text>
=======
        const list = this.props.list

        const taskCount = list.todos.length
        const completedCount = list.todos.filter(todo => todo.completed).length

        return (
            <KeyboardAvoidingView style={{flex: 1}} behavior='padding'>
            <SafeAreaView style={styles.container}>
                <TouchableOpacity
                    style={{position: 'absolute', top: 64, right: 32, zIndex: 10}}
                    onPress={this.props.closeModal}
                >
                    <AntDesign name='close' size={24} color={colors.white}/>
                </TouchableOpacity>
                <View style={[styles.section, styles.header, {borderBottomColor: list.color}]}>
                    <View>
                        <Text style={styles.title}>{list.name}</Text>
>>>>>>> a1bba0be05aa3e5b9a7d9a0ccd26274d910f81c6
                        <Text style={styles.taskCount}>
                            {completedCount} of {taskCount} tasks
                        </Text>
                    </View>
                </View>
<<<<<<< HEAD

                <View style={[styles.section, { flex: 3 }]}>
                    <FlatList
                        data={this.state.todos}
                        renderItem={({ item }) => this.renderTodo(item)}
                        keyExtractor={item => item.title}
                        contentContainerStyle={{ paddingHorizontal: 32, paddingVertical: 64 }}
                        showsVerticalScrollIndicator={false}
                    />
                </View>

                <KeyboardAvoidingView styles={[styles.section, styles.footer]} behavior="padding">
                    <TextInput style={[styles.input, { borderColor: this.state.color }]} />
                    <TouchableOpacity style={[styles.addTodo, { backgroundColor: this.state.color }]}>
                        <AntDesign name="plus" size={16} color={colors.white} />
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </SafeAreaView>

        );

=======
                <View style={[styles.section, {flex: 3}]}>
                    <FlatList
                        data={list.todos}
                        renderItem={({item, index}) => this.renderTodo(item, index)}
                        keyExtractor={item => item.title}
                        contentContainerStyle={{paddingHorizontal: 32, paddingVertical: 64}}
                        showVerticalScrollIndicator={false}
                    />
                </View>

                <View style={[styles.section, styles.footer]}>
                    <TextInput
                        style={[styles.input, {borderColor: list.color, color: colors.white}]}
                        onChangeText={text => this.setState({newTodo: text})}
                        value={this.state.newTodo}
                    />
                    <TouchableOpacity
                        style={[styles.addTodo, {backgroundColor: list.color}]}
                        onPress={() => this.addTodo()}
                    >
                        <AntDesign name='plus' size={16} color={colors.white}/>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            </KeyboardAvoidingView>
        );
>>>>>>> a1bba0be05aa3e5b9a7d9a0ccd26274d910f81c6
    }
}

const styles = StyleSheet.create({
    container: {
<<<<<<< HEAD
        backgroundColor: colors.white,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    section: {
        flex: 1,
        alignSelf: "stretch"
    },
    header: {
        justifyContent: "flex-end",
        marginLeft: 64,
        borderBottomWidth: 3
    },
    title: {
        fontSize: 30,
        fontWeight: "800",
        color: colors.black
=======
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1A1A1A',
    },
    section: {
        flex: 1,
        alignSelf: 'stretch',
    },
    header: {
        justifyContent: 'flex-end',
        marginLeft: 64,
        borderBottomWidth: 3,
    },
    title: {
        fontSize: 30,
        fontWeight: '800',
        color: colors.white,
>>>>>>> a1bba0be05aa3e5b9a7d9a0ccd26274d910f81c6
    },
    taskCount: {
        marginTop: 4,
        marginBottom: 16,
        color: colors.gray,
<<<<<<< HEAD
        fontWeight: "600"
    },
    footer: {
        paddingHorizontal: 32,
        flexDirection: "row",
        alignItems: "center"
=======
        fontWeight: '600',
        opacity: 0.5,
    },
    footer: {
        paddingHorizontal: 32,
        flexDirection: 'row',
        alignItems: 'center',
>>>>>>> a1bba0be05aa3e5b9a7d9a0ccd26274d910f81c6
    },
    input: {
        flex: 1,
        height: 48,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 6,
        marginRight: 8,
<<<<<<< HEAD
        paddingHorizontal: 8
=======
        paddingHorizontal: 8,
>>>>>>> a1bba0be05aa3e5b9a7d9a0ccd26274d910f81c6
    },
    addTodo: {
        borderRadius: 4,
        padding: 16,
<<<<<<< HEAD
        alignItems: "center",
        justifyContent: "center"
    },
    todoContainer: {
        paddingVertical: 16,
        flexDirection: "row",
        alignItems: "center"
    },
    todo: {
        color: colors.black,
        fontWeight: "700",
        fontSize: 16
    }
})
=======
        alignItems: 'center',
        justifyContent: 'center',
    },
    todoContainer: {
        paddingVertical: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    todo: {
        color: colors.black,
        fontWeight: '700',
        fontSize: 16,
    }
});
>>>>>>> a1bba0be05aa3e5b9a7d9a0ccd26274d910f81c6
