import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity
} from "react-native"

import { useDispatch, useSelector } from "react-redux";
import { SetUsers } from "./redux/action";

const Card = (props) => {
    const dispatch = useDispatch();
    const {GeneralResponse} = useSelector(s=>s)

    const like = () => {
        
        if( !props.info.likes.includes(GeneralResponse.login) ){

            dispatch(SetUsers(GeneralResponse.user.map((value)=>{
                if(value.id === props.info.id){
                    return {
                        ...value,
                        likes:props.info.likes.push(GeneralResponse.login)
                    }
                }else{
                    return value
                }
            })));
        }

    }

    return(
        <View style={styles.card}>
            <Image source={{uri:props.info.image, width:Dimensions.get("screen").width-120, height:Dimensions.get("screen").width-120}} resizeMode="cover"/>
            <View style={{alignItems:"center",justifyContent:"space-between" ,flexDirection:"row", width:Dimensions.get("screen").width-120, marginTop:10, paddingHorizontal:20}}>
                 <Text style={{fontSize:16,color:"#000"}}>{props.info.username}</Text>
                 <TouchableOpacity onPress={like} style={styles.like}>
                     <Text style={{fontSize:16,color:"#000",fontWeight:"bold"}}>Beğen</Text>
                 </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        padding:10,
        marginBottom: 30,
        alignItems: "center",
        justifyContent: "center",
        width: Dimensions.get("screen").width-100
    },
    like:{
        backgroundColor:"pink",
        paddingHorizontal:12,
        paddingVertical: 5
    }
});



export default Card;