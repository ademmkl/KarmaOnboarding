
import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    TextInput,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import { useNavigation } from "@react-navigation/native";

import CheckBox from '@react-native-community/checkbox';

import { useDispatch, useSelector } from "react-redux";
import { SetLogin, SetNew, SetPass, SetUsers } from '../../redux/action';


const Password = () => {
    const [feedback, setFeedback] = useState("");
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const navigation = useNavigation();

    const { GeneralResponse } = useSelector(s => s)
    const dispatch = useDispatch();

    const checkPassword = () => {
        

        if (GeneralResponse.newUser.password.length < 8) {
            setFeedback("*Şifre 8 karakterden kısa olamaz.")
        } else if (!toggleCheckBox) {
            setFeedback("*Devam etmek için KVKK metnini onaylamanız gerekmektedir.")
        } else {
            const newUser = GeneralResponse.newUser

            setFeedback("");
            dispatch(SetLogin(GeneralResponse.user.length.toString()))
            dispatch(SetUsers([...GeneralResponse.user, newUser]))
            dispatch(SetPass(true));
        }
    }

    return (
        <SafeAreaView style={styles.container}>

            <View>
                <Text style={{ color: "#fff", fontSize: 15 }}>Şifre</Text>
                <TextInput
                    secureTextEntry={true}
                    value={GeneralResponse.newUser.password}
                    onChangeText={(text) => dispatch(SetNew({...GeneralResponse.newUser, password: text, id: GeneralResponse.user.length.toString()}))}
                    style={styles.input}
                />
            </View>
            <View style={styles.scroll}>
                <ScrollView style={{ paddingHorizontal: 10 }}>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus autem voluptatibus nobis obcaecati,
                        commodi placeat doloremque. Illum ducimus laborum, ex molestiae consequatur modi soluta optio, totam eveniet
                        atque nulla repudiandae corporis earum eligendi autem officiis maiores! Officiis nihil sequi quis dicta vero
                        porro voluptatem expedita nobis natus beatae quidem odit, consequatur praesentium repudiandae ut inventore vitae
                        deleniti dolorem illo at optio repellendus! Labore possimus velit asperiores laudantium nesciunt quibusdam fuga culpa,
                        ratione, voluptas est suscipit ducimus, dolore voluptatem earum eius repellendus maxime qui commodi deserunt perspiciatis
                        architecto accusantium ipsum fugiat atque. Ab quas, id commodi porro quo officia non soluta.
                    </Text>
                </ScrollView>
            </View>

            <View style={{ width: 230, flexDirection: "row", alignItems: "center", marginVertical: 15, justifyContent: "flex-start" }}>
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
                <Text style={{ color: "#fff", fontSize: 15, marginLeft: 10 }}>KVKK Metnini Onayla</Text>
            </View>



            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => navigation.goBack(null)} style={styles.previous}>
                    <Text style={styles.text}>Geri Dön</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={checkPassword} style={styles.next}>
                    <Text style={styles.text}>Tamamla</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.feedback}>
                {feedback}
            </Text>

        </SafeAreaView>
    );
}


export default Password;


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#5e21ff",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    scroll: {
        width: 230,
        height: 180,
        backgroundColor: "#fff"
    },
    input: {
        width: 230,
        height: 35,
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        paddingVertical: 0,
        marginBottom: 30
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
    feedback:{
        marginTop: 20,
        color: "#fff",
        fontSize:15
      }

});
