import React from "react";
import {
    View,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    TouchableOpacity,
    TouchableNativeFeedbackBase,
    TextInput
} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import colors from '../Colors';
import tempData from "../tempData";
import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialIcons } from '@expo/vector-icons';
import moment from "moment";

export default class AddListModal extends React.Component {
    backgroundColors = ["#5CD859", "#24A6D9", "#595BD9", "#8022D9", "#D159D8", "#D85962", "#D88559"];

    state = {
        name: "",
        color: this.backgroundColors[0],
        date: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
        mode: 'date',
        show: false
    };

    createTodo = () => {
        const { name, color, date } = this.state

        tempData.push({
            name,
            color,
            date,
            todos: []
        });

        this.setState({ name: "", date: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()) });
        this.props.closeModal();
    }

    setDate = (event, date) => {
        date = date || this.state.state
        this.setState({
            show: Platform.OS === 'ios' ? true : false,
            date,
        });
    }

    showMode = mode => {
        this.setState({
            show: true,
            mode,
        });
    }

    showDatePicker = () => {
        this.showMode('date');
    };

    renderColors() {
        return this.backgroundColors.map(color => {
            return (
                <TouchableOpacity
                    key={color}
                    style={[styles.colorSelect, { backgroundColor: color }]}
                    onPress={() => this.setState({ color })}
                />
            )
        })
    }


    render() {
        const { mode, date, show } = this.state;
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" backgroundColor={'#1A1A1A'}>
                <TouchableOpacity style={{ position: "absolute", top: 64, right: 32 }} onPress={this.props.closeModal}>
                    <AntDesign name="close" size={24} color={'white'} />
                </TouchableOpacity>

                <View style={{ alignSelf: "stretch", marginHorizontal: 32 }}>
                    <Text style={styles.title}>Create Todo List</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Task Name"
                        placeholderTextColor={colors.white}
                        onChangeText={text => this.setState({ name: text })}
                    />

                    <View style={{flexDirection: "row"}}>
                    <View style={styles.dateBox}>
                        <Text style={styles.dateText}>
                            {moment(this.state.date).format("DD/MM/YYYY")}
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={styles.calendar}
                        onPress={this.showDatePicker}
                    >
                        <MaterialIcons name="date-range" size={24} color={colors.white} />
                    </TouchableOpacity>
                    </View>

                    {
                        show && <DateTimePicker
                            style={{
                                backgroundColor: '#FFFFFF',
                                marginTop: 10,
                            }}
                            value={date}
                            mode={mode}
                            format="DD/MM/YYYY"
                            display='default'
                            onChange={this.setDate}
                        />
                    }

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 12 }}>
                        {this.renderColors()}
                    </View>

                    <TouchableOpacity
                        style={[styles.create, { borderColor: this.state.color }]}
                        onPress={this.createTodo}
                    >
                        <Text style={{ color: this.state.color, fontWeight: "600" }}>Create task</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 28,
        fontWeight: "800",
        color: colors.white,
        alignSelf: "center",
        marginBottom: 16
    },
    input: {
        borderWidth: 2,
        borderColor: colors.white,
        borderRadius: 6,
        color: colors.white,
        height: 50,
        marginTop: 8,
        paddingHorizontal: 16,
        fontSize: 18
    },
    create: {
        marginTop: 24,
        height: 50,
        borderRadius: 6,
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center"
    },
    colorSelect: {
        width: 30,
        height: 30,
        borderRadius: 4
    },
    dateBox: {
        borderWidth: 2,
        borderColor: colors.white,
        width: 285,
        borderRadius: 6,
        height: 50,
        marginTop: 8,
        paddingHorizontal: 12,
        fontSize: 18
    },
    dateText: {
        color: colors.white,
        fontSize: 18,
        marginTop: 12,
        justifyContent: "flex-start"
    },
    calendar: {
        borderWidth: 2,
        borderColor: colors.white,
        borderRadius: 4,
        padding: 10,
        marginTop: 8,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50,
    }
});