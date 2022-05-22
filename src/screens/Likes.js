
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

import {useAtom} from "jotai";
import { users, currentUser } from './jotai/store';


const Likes = () => {
  const [refresh, setRefresh] = useState(false);
  const [usersWhoLikeYou, setUsersWhoLikeYou] = useState([]);

  const [usersData] = useAtom(users);
  const [currentUserData] = useAtom(currentUser);

  useEffect(() => {

    const newArr = usersData.filter((value) => {
      return currentUserData.likes.includes(value.id)
    })

    setUsersWhoLikeYou(newArr);

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
        data={usersWhoLikeYou}
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
