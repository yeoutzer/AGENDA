import React from 'react';
import { Image ,StyleSheet, Text, View, TouchableOpacity, FlatList, TouchableNativeFeedbackBase, Modal } from 'react-native';
import { AntDesign, MaterialIcons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from './Colors';
import tempData from './tempData';
import tempReminder from './tempReminder';
import TodoList from './components/TodoList';
import Reminder from './components/Reminder';
import AddListModal from './components/AddListModal';

export default class App extends React.Component {
  state = {
    addTodoVisible: false
  };

  toggleAddToDoModal() {
    this.setState({ addTodoVisible: !this.state.addTodoVisible });
  }

  render() {
    return (
        <View style = { styles.container }>
          <Modal 
            animationType = "slide"
            visible = {this.state.addTodoVisible}
            onRequestClose = {() => this.toggleAddToDoModal()}
          >
            <AddListModal closeModal = {() => this.toggleAddToDoModal()}/>
          </Modal>

          <View style = {{ flexDirection: 'row'}}>
            <View style = { styles.lineEffect }/>
              <Image style = { styles.logo }
                     source = { require('./logo_horizontal.png') }
                     resizeMode = 'contain'
              />
            <View style = { styles.lineEffect }/>
          </View>

          <View style = {styles.horizontalDivider}>
            <Text style = {styles.heading}>To-Do</Text>
          </View>

          <View style = {{ height: 387, paddingLeft: 32}}>
            <FlatList
                data = { tempData }
                keyExtractor = { item => item.name}
                horizontal = { true }
                showsHorizontalScrollIndicator = { false }
                renderItem = {({ item }) => (
                    <TodoList list = { item }/>
                )}
            />
          </View>

          <View style = {styles.horizontalDivider}>
            <Text style = {styles.heading}>Reminders</Text>
          </View>

          <View style = {{ height: 150, paddingHorizontal: 10 }}>
            <FlatList
              data = {tempReminder}
              keyExtractor = {item => item.event}
              showsVerticalScrollIndicator = {false}
              renderItem = {({item}) => (
                  <Reminder list = {item}/>
              )}
              />
          </View>
          
          <View style = {{ flexDirection: 'row', paddingTop: 15 }}>
            <View style = { styles.menuIcon }>
            <TouchableOpacity style = { styles.menuList }>
              <FontAwesome5 name = 'user-friends' size = { 24 } color = { colors.blue }/>
            </TouchableOpacity>
            <Text style = { styles.menuFont }>Friends</Text>
            </View>

            <View style = { styles.menuIcon }>
            <TouchableOpacity style = { styles.menuList }>
              <MaterialCommunityIcons name = 'chart-line' size = { 24 } color = { colors.blue }/>
            </TouchableOpacity>
            <Text style = { styles.menuFont }>Rank</Text>
            </View>

            <View style = { styles.menuIcon }>
            <TouchableOpacity style = { styles.menuList }>
              <MaterialIcons name = 'alarm' size = { 24 } color = { colors.blue }/>
            </TouchableOpacity>
            <Text style = { styles.menuFont }>Reminders</Text>
            </View>

            <View style = { styles.menuIcon }>
            <TouchableOpacity style = { styles.menuList } onPress = {() => this.toggleAddToDoModal()}>
              <AntDesign name = 'plus' size = { 24 } color = { colors.blue }/>
            </TouchableOpacity>
            <Text style = { styles.menuFont }>Add List</Text>
            </View>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
    //justifyContent: 'center'
  },
  horizontalDivider: {
    padding: 10,
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
    borderColor: colors.lightblue,
    borderRadius: 4,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  menuIcon: {
    paddingLeft: 13,
    paddingRight: 13
  },
  menuFont: {
    color: colors.blue,
    fontWeight: '600',
    fontSize: 15,
    alignSelf: 'center'
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
