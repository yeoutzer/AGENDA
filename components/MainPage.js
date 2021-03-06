import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import { FontAwesome5, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import colors from '../Colors';
import TodoList from './TodoList';
import LoadingPage from './LoadingPage'
import * as firebase from 'firebase';
import "@firebase/firestore";

export default class MainPage extends React.Component {
    state = {
        addTodoVisible: false,
        lists: [],
        user: {},
        loading: true
    };

    get userId() {
        return firebase.auth().currentUser.uid;
    }

    get refer() {
        return firebase
            .firestore()
            .collection('users')
            .doc(this.userId)
            .collection('lists');
    }

    componentDidMount() {
        let refer = this.refer.orderBy('date');

        this.unsubscribe = refer.onSnapshot(snapshot => {
            const todos = [];
            snapshot.forEach(doc => {
                todos.push({ id: doc.id, ...doc.data() });
            });
            this.setState({lists: todos});
        });

        this.setState({ loading: false, user: this.userId })

    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    renderList = (list, navigation) => {
        return <TodoList list={list} navigation={navigation} refer={this.refer} />;
    };

    render() {
        const navigation = this.props.navigation;

        if (this.state.loading) {
            return <LoadingPage />
        }

        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', marginTop: 70, flex: 0.1 }}>
                    <View style={styles.lineEffect} />
                    <Image style={styles.logo}
                        source={require('../images/logo_horizontal.png')}
                        resizeMode='contain'
                    />
                    <View style={styles.lineEffect} />
                </View>

                <View>
                    <Text style={{ color: colors.white }}>User: {this.state.user}</Text>
                </View>

                <View style={styles.horizontalDivider}>
                    <Text style={styles.heading}>To-Do</Text>
                </View>

                <View style={{ paddingLeft: 32, flex: 4 }}>
                    <FlatList
                        data={this.state.lists}
                        keyExtractor={item => item.id.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => this.renderList(item, navigation)}
                        keyboardShouldPersistTaps='always'
                    />
                </View>

                <View style={styles.menu}>
                    <View style={styles.menuIcon}>
                        <TouchableOpacity style={styles.menuList}>
                            <FontAwesome5 name='user-friends' size={30} color={colors.white} />
                        </TouchableOpacity>
                        <Text style={styles.menuFont}>Friends</Text>
                    </View>

                    <View style={styles.menuIcon}>
                        <TouchableOpacity style={styles.menuList}>
                            <MaterialCommunityIcons name='chart-line' size={30} color={colors.white} />
                        </TouchableOpacity>
                        <Text style={styles.menuFont}>Rank</Text>
                    </View>

                    <View style={styles.menuIcon}>
                        <TouchableOpacity
                            style={styles.menuList}
                            onPress={() => navigation.navigate('AddList', {refer: this.refer})}
                        >
                            <Entypo name="add-to-list" size={36} color={colors.white} />
                        </TouchableOpacity>
                        <Text style={styles.menuFont}>Add List</Text>
                    </View>

                    <View style={styles.menuIcon}>
                        <TouchableOpacity style={styles.menuList} onPress={() => navigation.popToTop()}>
                            <MaterialCommunityIcons name="logout-variant" size={36} color={colors.white} />
                        </TouchableOpacity>
                        <Text style={styles.menuFont}>Logout</Text>
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
        flex: 0.6,
        marginVertical: 15,
        justifyContent: 'flex-end'
    },
    lineEffect: {
        backgroundColor: colors.lightblue,
        height: 1,
        flex: 1,
        alignSelf: 'center',
    },
    menu: {
        flexDirection: 'row',
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 50,
        marginTop: 20
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
        alignSelf: 'center',
        marginHorizontal: 10,
    },
    heading: {
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: '500',
        color: colors.white,
    }
});