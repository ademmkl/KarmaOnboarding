
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Dimensions,
  RefreshControl,
  Text,
  View
} from 'react-native';

import Card from '../UserCard';

import { useSelector } from 'react-redux';

const Likes = () => {
  const [refresh, setRefresh] = useState(false);
  const [users, setUsers] = useState([]);

  const { GeneralResponse } = useSelector(s => s);

  useEffect(() => {

    const userCurrent = GeneralResponse.user.find((value)=>{
        return GeneralResponse.login === value.id
    })

    const newArr = GeneralResponse.user.filter((value) => {
      return userCurrent.likes.includes(value.id)
    })

    setUsers(newArr);

  }, []);

  const refreshControl = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 2000);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: Dimensions.get("screen").width, height: 60, alignItems: "center", justifyContent: "center" }}>
        <Text style={{color: "#fff", fontSize: 20,}}>
          Seni Beğenenler
        </Text>
      </View>

      <FlatList
        data={users}
        renderItem={({ item }) => <Card info={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={{ alignItems: "center", width: Dimensions.get("screen").width}}
        refreshControl={<RefreshControl refreshing={refresh} onRefresh={refreshControl} />}
      />
    </SafeAreaView>
  );
}
export default Likes;


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5e21ff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 25,
    color: "#fff"
  },

});
