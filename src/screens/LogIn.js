
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  View
} from 'react-native';

import { useNavigation } from "@react-navigation/native";

import { useDispatch, useSelector } from 'react-redux';
import { SetLogin, SetPass } from '../redux/action';


const LogIn = () => {
  const [feedback, setFeedback] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { GeneralResponse } = useSelector(s => s);

  const navigation = useNavigation();

  const checkUser = () => {
    const userExists = GeneralResponse.user.filter(
      (value) => {
        return value.username === username
      }
    )

    if (userExists.length) {

      if (userExists[0].password === password) {
        setFeedback("");
        dispatch(SetLogin(userExists[0].id))
        dispatch(SetPass(true));
      } else {
        setFeedback("*Kullanıcı adı veya şifre hatalı.");
      }

    } else{
      setFeedback("*Kullanıcı adı veya şifre hatalı.");
    }

  }


  return (
    <SafeAreaView style={styles.container}>
        <View>
          <Text style={{ color: "#fff", fontSize: 15 }}>Kullanıcı Adı</Text>
          <TextInput onChangeText={setUsername} value={username} style={{ backgroundColor: "#fff", width: 230, height: 35, marginBottom: 10, paddingVertical: 0, paddingHorizontal: 10 }} />
        </View>
        <View>
          <Text style={{ color: "#fff", fontSize: 15 }}>Şifre</Text>
          <TextInput secureTextEntry={true} onChangeText={setPassword} value={password} style={{ backgroundColor: "#fff", width: 230, height: 35, marginBottom: 50, paddingVertical: 0, paddingHorizontal: 10 }} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={checkUser} style={styles.logIn}>
            <Text style={styles.text}>Giriş yap</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("username")} style={styles.signIn}>
            <Text style={styles.text}>Kaydol</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.feedback}>
          {feedback}
        </Text>
    </SafeAreaView>
  );
}


export default LogIn;


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5e21ff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  logIn: {
    backgroundColor: "#fff",
    height: 40,
    width: 110,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5
  },
  signIn: {
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
    fontSize: 15
  }
});
