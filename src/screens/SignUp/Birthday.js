
import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Platform
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import DateTimePicker from '@react-native-community/datetimepicker';

import {useAtom} from "jotai";
import { newUser } from '../jotai/store';


const Birthday = () => {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const [newUserData, setNewUserData] = useAtom(newUser);

    const navigation = useNavigation();

    useEffect(
        () => {
            console.log(newUserData);
        }
    )

    const onChange= (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    }

    const showDate = () => {
        setShow(true);
    }

    const next = () => {
        setNewUserData({...newUserData, birthday: date});
        navigation.navigate("photo");
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ width: 230 }}>
                <Text style={{ color: "#fff", fontSize: 15 }}>Doğum Günü</Text>
                <TouchableOpacity onPress={showDate} style={styles.birthday}>
                    <Text style={{ color: "#fff", fontSize: 40, paddingRight: 8, borderRightWidth: 1, borderRightColor: "#fff" }}>
                        {date.getDate() < 10? "0" + date.getDate() : date.getDate()}
                    </Text>
                    <Text style={{ color: "#fff", fontSize: 40, paddingHorizontal: 8 }}>
                        {date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1}
                    </Text>
                    <Text style={{ color: "#fff", fontSize: 40, paddingLeft: 8, borderLeftWidth: 1, borderLeftColor: "#fff" }}>
                        {date.getFullYear()}
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={()=> navigation.goBack(null)} style={styles.previous}>
                    <Text style={styles.text}>Geri Dön</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={next} style={styles.next}>
                    <Text style={styles.text}>Sıradaki</Text>
                </TouchableOpacity>
            </View>
            {show && (
                <DateTimePicker
                    testID='dateTimePicker'
                    value={date}
                    mode="date"
                    is24Hour= {true}
                    onChange={onChange}
                />
            )}
        </SafeAreaView>
    );
}


export default Birthday;


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#5e21ff",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    previous: {
        backgroundColor: "#fff",
        height: 40,
        width: 110,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 5
    },
    next: {
        backgroundColor: "#fff",
        height: 40,
        width: 110,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 5
    }, 
    text: {
        color: "#5e21ff",
        fontSize: 15,
        fontWeight: "bold"
    },
    birthday: {
        flexDirection: "row",
        marginBottom: 50
    }

});
