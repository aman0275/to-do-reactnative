import React,{useState}from "react";
import {
  StyleSheet,
  Text,
  View,
 TextInput,
 Button,
} from "react-native";

export default function AddTodo({submitHandler}){

    const [text,setText] = useState('');
    const changeHandler=(val)=>{
        setText(val);
    }

    return(
        <View>
            <TextInput style={styles.input}
            placeholder="new todo" placeholderTextColor="white"
            onChangeText={changeHandler}
            />
            <Button title="add todo" color="coral" onPress={()=>submitHandler(text)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#d4d4d4',
        color: 'white',
    }
})