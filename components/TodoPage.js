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
    Keyboard,
    Alert,
    TouchableWithoutFeedback
} from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import colors from '../Colors';

export default class TodoPage extends React.Component {
    state = {
        newTodo: ''
    };

    updateList = list => {
        firebase.updateList(list);
    };

    toggleSubTaskCompleted = index => {
        let list = this.props.list
        list.todos[index].completed = !list.todos[index].completed

        this.updateList(list);
        this.setState({ newTodo: '' });
    }

    addSubTask = () => {
        let list = this.props.list;

        if (!list.todos.some(todo => todo.title === this.state.newTodo)) {
            list.todos.push({ title: this.state.newTodo, completed: false });

            this.updateList(list);
        }

        this.setState({ newTodo: '' });
        Keyboard.dismiss();
    };

    deleteSubTask = index => {
        let list = this.props.list
        list.todos.splice(index, 1)
        this.updateList(list);
        this.setState({ newTodo: '' });
    }

    renderTodo = (todo, index) => {
        return (
            <View style={styles.todoContainer}>
                <TouchableOpacity onPress={() => this.toggleSubTaskCompleted(index)} style={{ flex: 1 }}>
                    <Ionicons
                        name={todo.completed ? 'ios-square' : 'ios-square-outline'}
                        size={24}
                        color={colors.gray}
                        style={{ width: 32 }}
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
                >
                    {todo.title}
                </Text>

                <TouchableOpacity onPress={() => this.deleteSubTask(index)} style={{ flex: 1 }}>
                    <Ionicons
                        name="ios-close-circle-outline"
                        size={24}
                        color={colors.red}
                        style={{ width: 32 }}
                    />
                </TouchableOpacity>
            </View>
        );
    };

    render() {
        const list = this.props.list
        const navigation = this.props.navigation;

        const taskCount = list.todos.length
        const completedCount = list.todos.filter(todo => todo.completed).length

        return (
            <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
                <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding' backgroundColor = '#1A1A1A'>
                    <SafeAreaView style={styles.container}>
                        <TouchableOpacity
                            style={{ position: 'absolute', top: 64, right: 32, zIndex: 10 }}
                            onPress={() => navigation.goBack()}
                        >
                            <AntDesign name='close' size={24} color={colors.white} />
                        </TouchableOpacity>
                        <View style={[styles.section, styles.header, { borderBottomColor: list.color }]}>
                            <View>
                                <Text style={styles.title}>{list.name}</Text>
                                <Text style={styles.taskCount}>
                                    {completedCount} of {taskCount} tasks
                        </Text>
                            </View>
                        </View>
                        <View style={[styles.section, { flex: 3, marginVertical: 16 }]}>
                            <FlatList
                                data={list.todos}
                                renderItem={({ item, index }) => this.renderTodo(item, index)}
                                keyExtractor={(item) => item.title}
                                showVerticalScrollIndicator={false}
                            />
                        </View>

                        <View style={[styles.section, styles.footer]}>
                            <TextInput
                                style={[styles.input, { borderColor: list.color, color: colors.white }]}
                                onChangeText={text => this.setState({ newTodo: text })}
                                value={this.state.newTodo}
                            />
                            <TouchableOpacity
                                style={[styles.addTodo, { backgroundColor: list.color }]}
                                onPress={() => {
                                    if (this.state.newTodo == '') {
                                        Alert.alert('No input', 'Please enter name of sub-task', [{ text: 'Ok' }]);
                                    } else {
                                        this.addSubTask();
                                    }
                                }}
                            >
                                <AntDesign name='plus' size={16} color={colors.white} />
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1A1A1A',
    },
    section: {
        alignSelf: 'stretch',
    },
    header: {
        justifyContent: 'flex-end',
        marginLeft: 64,
        borderBottomWidth: 3,
        paddingTop: 16,
    },
    title: {
        fontSize: 30,
        fontWeight: '800',
        color: colors.white,
    },
    taskCount: {
        marginTop: 4,
        marginBottom: 16,
        color: colors.gray,
        fontWeight: '600',
        opacity: 0.5,
    },
    footer: {
        paddingHorizontal: 32,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
    },
    input: {
        flex: 1,
        height: 48,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 6,
        marginRight: 8,
        paddingHorizontal: 8,
    },
    addTodo: {
        borderRadius: 4,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    todoContainer: {
        paddingVertical: 16,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 32,
    },
    todo: {
        flex: 7,
        color: colors.black,
        fontWeight: '700',
        fontSize: 16,
    },
    deleteButton: {
        flex: 1,
        backgroundColor: colors.red,
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
    }
});