import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    Modal,
} from 'react-native';
import {AntDesign, FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons';
import colors from './Colors';
import tempData from './tempData';
import TodoList from './components/TodoList';
import AddListModal from './components/AddListModal';
import Login from './components/Login';

export default class App extends React.Component {
    state = {
        addTodoVisible: false,
        lists: tempData
    };

    toggleAddToDoModal() {
        this.setState({addTodoVisible: !this.state.addTodoVisible});
    }

    renderList = list => {
        return <TodoList list={list} updateList={this.updateList} />;
    };

    addList = list => {
        this.setState({lists: [...this.state.lists, {...list, id: this.state.lists.length + 1, todos: [] }]});
    };

    updateList = list => {
        this.setState({
            lists: this.state.lists.map(item => {
                return item.id === list.id ? list : item;
            })
        });
    };

    render() {
        return (
            //<Login />
            <View style={styles.container}>
                <Modal
                    animationType="slide"
                    visible={this.state.addTodoVisible}
                    onRequestClose={() => this.toggleAddToDoModal()}
                >
                    <AddListModal closeModal={() => this.toggleAddToDoModal()} addList={this.addList}/>
                </Modal>

                <View style={{flexDirection: 'row', marginTop: 70}}>
                    <View style={styles.lineEffect}/>
                    <Image style={styles.logo}
                           source={require('./images/logo_horizontal.png')}
                           resizeMode='contain'
                    />
                    <View style={styles.lineEffect}/>
                </View>

                <View style={styles.horizontalDivider}>
                    <Text style={styles.heading}>To-Do</Text>
                </View>

                <View style={{height: 400, paddingLeft: 32}}>
                    <FlatList
                        data={this.state.lists}
                        keyExtractor={item => item.name}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item}) => this.renderList(item)}
                        keyboardShouldPersistTaps='always'
                    />
                </View>

                <View style={styles.horizontalDivider}></View>

                <View style={{flexDirection: 'row', marginTop: 15}}>
                    <View style={styles.menuIcon}>
                        <TouchableOpacity style={styles.menuList}>
                            <FontAwesome5 name='user-friends' size={30} color={colors.white}/>
                        </TouchableOpacity>
                        <Text style={styles.menuFont}>Friends</Text>
                    </View>

                    <View style={styles.menuIcon}>
                        <TouchableOpacity style={styles.menuList}>
                            <MaterialCommunityIcons name='chart-line' size={30} color={colors.white}/>
                        </TouchableOpacity>
                        <Text style={styles.menuFont}>Rank</Text>
                    </View>

                    <View style={styles.menuIcon}>
                        <TouchableOpacity style={styles.menuList} onPress={() => this.toggleAddToDoModal()}>
                            <AntDesign name='plus' size={24} color={colors.white}/>
                        </TouchableOpacity>
                        <Text style={styles.menuFont}>Add List</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        flex: 1,
        backgroundColor: '#1A1A1A',
        alignItems: 'center',
    },
    horizontalDivider: {
        marginVertical: 20
    },
    lineEffect: {
        backgroundColor: colors.lightblue,
        height: 1,
        flex: 1,
        alignSelf: 'center',
    },
    title: {
        fontSize: 38,
        fontWeight: '800',
        color: colors.black,
        paddingHorizontal: 64,

    },
    menuList: {
        borderWidth: 2,
        borderColor: colors.white,
        borderRadius: 4,
        padding: 10,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        width: 70,
    },
    menuIcon: {
        paddingLeft: 13,
        paddingRight: 13,
    },
    menuFont: {
        color: colors.white,
        fontWeight: '600',
        fontSize: 15,
        alignSelf: 'center',
        marginTop: 5,
    },
    logo: {
        height: 60,
        flex: 2,
        paddingHorizontal: 5,
    },
    heading: {
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: '500',
        color: colors.white,
    }
});
