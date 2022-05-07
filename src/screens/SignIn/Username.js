
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

import { useDispatch, useSelector } from "react-redux";
import { SetNew } from '../../redux/action';


const Username = () => {
  const [username, setUsername] = useState("")

  const navigation = useNavigation();

  const {GeneralResponse} = useSelector(s=>s)
  const dispatch = useDispatch();

  const checkUser = () => {

    const userExists = GeneralResponse.user.some(
      (value) => {
        return value.username === username
      }
    )

    if(userExists){
      console.log("Böyle bir kullanıcı mevcuttur.")
    }else{
      dispatch(SetNew({...GeneralResponse.newUser, username: username}))
      navigation.navigate("birthday")
    }
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

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.previous}>
          <Text style={styles.text}>Geri Dön</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={checkUser} style={styles.next}>
          <Text style={styles.text}>Sıradaki</Text>
        </TouchableOpacity>
      </View>


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
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 0,
    marginBottom: 50
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
  }

});
