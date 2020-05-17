import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { AntDesign, MaterialIcons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from './Colors';
import tempData from './tempData';
import TodoList from './components/TodoList';

export default class App extends React.Component {
  render() {
    return (
        <View style = { styles.container }>
          <View style = {{ flexDirection: 'row'}}>
            <View style = { styles.lineEffect }/>
            <Text style = { styles.title }>AGENDA</Text>
            <View style = { styles.lineEffect }/>
          </View>

          <View style = { styles.horizontalDivider }/>

          <View style = {{ height: 325, paddingLeft: 32, paddingTop: 50}}>
            <FlatList
                data = { tempData }
                keyExtractor = { item => item.name}
                horizontal = { true }
                showHorizontalScrollIndicator = { false }
                renderItem = {({ item }) => (
                    <TodoList list = { item }/>
                )}
            />
          </View>
          
          <View style = {{ flexDirection: 'row', paddingTop: 100 }}>
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
            <TouchableOpacity style = { styles.menuList }>
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
    backgroundColor: '#fff',
    alignItems: 'center'
    //justifyContent: 'center',
  },
  horizontalDivider: {
    padding: 16
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
});
