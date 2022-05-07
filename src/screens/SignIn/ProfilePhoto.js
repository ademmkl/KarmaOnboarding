
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

import { useNavigation } from "@react-navigation/native";

import { useDispatch, useSelector } from "react-redux";
import { SetNew } from '../../redux/action';

import {launchCamera, launchImageLibrary} from "react-native-image-picker"


const Photo = () => {

  const [image, setImage] = useState("")

  const navigation = useNavigation();

  const {GeneralResponse} = useSelector(s=>s)
  const dispatch = useDispatch();


  const takePhoto = async () => {
    const options = {
      maxWidth: 300,
      maxHeight: 300,
      quality: 1
    }

    await launchCamera(options, (res) => {
      console.log("res", res)
    })
  }

  const getPhoto = async () => {
    const options = {
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
      mediaType: "photo"
    }

    await launchImageLibrary(options, (res) => {
      console.log("res", res)
    })
  }


  return (
    <SafeAreaView style={styles.container}>

        <Image source={require("./avatar.png")} resizeMode="contain" style={{width:100, height:100}}/>

        <View style={{ flexDirection: "row", marginVertical: 40}}>
        <TouchableOpacity onPress={() => navigation.goBack(null)} style={styles.previous}>
          <Text style={styles.text}>Geri Dön</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("password")} style={styles.next}>
          <Text style={styles.text}>Sıradaki</Text>
        </TouchableOpacity>
      </View>

        <TouchableOpacity onPress={takePhoto} style={styles.cam}>
          <Text style={styles.text}>Fotoğraf Çek</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={getPhoto} style={styles.lib}>
          <Text style={styles.text}>Galeriden Seç</Text>
        </TouchableOpacity>


    </SafeAreaView>
  );
}


export default Photo;


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5e21ff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  cam: {
    width: 230,
    height: 40,
    backgroundColor: "#fff",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  lib: {
    width: 230,
    height: 40,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
