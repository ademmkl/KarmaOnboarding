
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

import { useAtom } from 'jotai';
import {currentUser} from './jotai/store';
import { users } from './jotai/store';


const Home = () => {
  const [refresh, setRefresh] = useState(false);
  const [otherUsers, setOtherUsers] = useState([]);

  const [current] = useAtom(currentUser);
  const [users_db] = useAtom(users);

  useEffect(() => {

    const newArr = users_db.filter((value) => {
      return value.id != current.id
    })

    setOtherUsers(newArr);

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
          Yeni İnsanlarla Tanış!
        </Text>
      </View>

      <FlatList
        data={otherUsers}
        renderItem={({ item }) => <Card info={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={{ alignItems: "center", width: Dimensions.get("screen").width}}
        refreshControl={<RefreshControl refreshing={refresh} onRefresh={refreshControl} />}
      />
    </SafeAreaView>
  );
}
export default Home;


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
