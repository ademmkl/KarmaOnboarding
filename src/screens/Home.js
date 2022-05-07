
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';




const Home = () => {

    return(
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Home</Text>
      </SafeAreaView>
    );
  }

  export default Home;
  
  
  const styles = StyleSheet.create({
    container:{
      backgroundColor: "#5e21ff",
      flex:1,
      alignItems: "center",
      justifyContent: "center"
    },
    text:{
      fontSize: 25,
      color: "#fff"
    }
    
  });
  