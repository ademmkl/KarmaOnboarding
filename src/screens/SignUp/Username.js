
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native';

import { useNavigation } from "@react-navigation/native";

import {useAtom } from 'jotai';
import { users, newUser } from '../jotai/store';


const Username = () => {
  const [feedback, setFeedback] = useState("");
  const [username, setUsername] = useState("");

  const [users_db] = useAtom(users);
  const [newUserData, setNewUserData] = useAtom(newUser); 

  const navigation = useNavigation();

  const checkUser = () => {

    const userExists = users_db.some(
      (value) => {
        return value.username === username
      }
    )

    if (userExists) {
      setFeedback("*Böyle bir kullanıcı mevcuttur.");
      return;
    }

    if (username == "") {
      setFeedback("*Lütfen kullanıcı adınızı giriniz.");
      return;
    }

    setFeedback("");
    setNewUserData({...newUserData, username: username});
    navigation.navigate("birthday");



    // if (userExists) {
    //   setFeedback("*Böyle bir kullanıcı mevcuttur.")
    // } else if (username == "") {
    //   setFeedback("*Lütfen kullanıcı adınızı giriniz.")
    // } else {
    //   setFeedback("")
    //   dispatch(SetNew({ ...GeneralResponse.newUser, username: username }))
    //   navigation.navigate("birthday")
    // }
  }

  return (
    <SafeAreaView style={styles.container}>

      <View>
        <Text style={{ color: "#fff", fontSize: 15 }}>Kullanıcı Adı</Text>
        <TextInput
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
      </View>

      <View style={{ width: 230}}>
        <TouchableOpacity onPress={checkUser} style={styles.next}>
          <Text style={styles.text}>Sıradaki</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.feedback}>
        {feedback}
      </Text>

    </SafeAreaView>
  );
}


export default Username;


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5e21ff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    width: 230,
    height: 35,
    color:"#000",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 0,
    marginBottom: 50
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
