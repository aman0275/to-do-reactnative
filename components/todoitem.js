import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';


export default function TodoItem({item, pressHandler}){
    return(
        <TouchableOpacity onPress={()=>{pressHandler(item.key)}}>
            <View style={styles.item}>
            <MaterialIcons name="delete" size={18} color={'white'}/>
            <Text style={styles.text}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text:{
        color: "white",
        marginLeft:8,
    },
    item: {
        padding:14,
        marginTop:18,
        borderColor:'#d4d4d4',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:8,
        flexDirection:'row',
    }
})