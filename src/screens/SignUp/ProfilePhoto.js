
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

import ImagePicker from 'react-native-image-crop-picker';

import { atom, useAtom } from 'jotai';
import { newUser } from '../jotai/store';


const Photo = () => {
  const [feedback, setFeedback] = useState("");
  const [newUserData, setNewUserData] = useAtom(newUser);

  const navigation = useNavigation();


  const takePhoto = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
    }).then(image => {
      setNewUserData({...newUserData, image: image? image.path: ""});
    });
  }

  const getPhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true
    }).then(image => {
      setNewUserData({...newUserData, image: image? image.path: ""});
    });
  }

  const checkPhoto = () => {

    if(newUserData.image === ""){
      setFeedback("*Devam etmek için lütfen bir profil fotografı seçin.");
    }else{
      setFeedback("");
      navigation.navigate("password");
    }

    
  }


  return (
    <SafeAreaView style={styles.container}>

      <Image source={newUserData.image != "" ? { uri: newUserData.image, width: 150, height: 150 } : require("./avatar.png")} resizeMode="contain" style={{ width: 150, height: 150, borderRadius: 75 }} />

      <View style={{ flexDirection: "row", marginVertical: 40 }}>
        <TouchableOpacity onPress={() => navigation.goBack(null)} style={styles.previous}>
          <Text style={styles.text}>Geri Dön</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={checkPhoto} style={styles.next}>
          <Text style={styles.text}>Sıradaki</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={takePhoto} style={styles.cam}>
        <Text style={styles.text}>Fotoğraf Çek</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={getPhoto} style={styles.lib}>
        <Text style={styles.text}>Galeriden Seç</Text>
      </TouchableOpacity>

      <Text style={styles.feedback}>
        {feedback}
      </Text>

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
  },
  feedback:{
    marginTop: 20,
    color: "#fff",
    fontSize:15
  }

});
