import React from "react";

import { Image } from "react-native"

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import LogIn from "./src/screens/LogIn";

import Username from "./src/screens/SignUp/Username"
import Birthday from "./src/screens/SignUp/Birthday";
import Photo from "./src/screens/SignUp/ProfilePhoto";
import Password from "./src/screens/SignUp/Password";


import Home from "./src/screens/Home";
import Likes from "./src/screens/Likes";

import { Provider,atom, useAtom } from "jotai";
import { currentUser } from "./src/screens/jotai/store";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {

  const [currentUserData] = useAtom(currentUser);
 
  if ( currentUserData.id == null) {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="logIn">
          <Stack.Screen name="logIn" component={LogIn} />
          <Stack.Screen name="username" component={Username} />
          <Stack.Screen name="birthday" component={Birthday} />
          <Stack.Screen name="photo" component={Photo} />
          <Stack.Screen name="password" component={Password} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="home">
          <Tab.Screen
            name="home"
            component={Home}
            options={{
              title: "Ana Sayfa",
              tabBarIcon: ({ size }) => {
                return (
                  <Image source={{ uri: "https://www.iconpacks.net/icons/2/free-home-icon-2502-thumb.png", width: size, height: size }} resizeMode="contain" />
                );
              }
            }}
          />
          <Tab.Screen
            name="likes"
            component={Likes}
            options={{
              title: "Beğeniler",
              tabBarIcon: ({ size }) => {
                return (
                  <Image source={{ uri: "https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png", width: size, height: size }} resizeMode="contain" />
                );
              }
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const AppWrapped = () => {
  return(
    <Provider>
      <App/> 
    </Provider>
  )
}


export default AppWrapped;
