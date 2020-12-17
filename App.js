import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoitem";
import AddTodo from "./components/addTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "react native", key: "1" },
    { text: "php", key: "2" },
    { text: "college", key: "3" },
    { text: "mern", key: "4" },
    { text: "presentaion", key: "5" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todos) => todos.key != key);
    });
  };

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodos];
    });
  };

  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                // <TouchableOpacity>
                //   <Text style={styles.btext}>{item.text}</Text>
                // </TouchableOpacity>
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    // alignItems: "center",
    // justifyContent: "center",
    color: "white",
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    margin: 20,
    flex: 1,
  },
  btext: {
    color: "white",
  },
});

{
  /* <Text style={styles.btext}>
        Open up App.js to start working on your app!
      </Text>
      <Text style={styles.btext}>Enter Name:</Text>
      <TextInput style={styles.input} multiline={true} keyboardType='ascii-capable' placeholder="..aman" onChangeText={(val) => setName(val)} />
      <View style={styles.buttonContainer}>
        <Button title="no use button" />
      </View>

      <Text style={styles.btext}>My name is {name}</Text>

      <StatusBar style="auto" />

      <FlatList
      //keyextractor
      data={people}
      renderItem={({item})=>(
        <TouchableOpacity>
          <Text style={styles.btext}>{item.name}</Text>
        </TouchableOpacity>
      )}
        /> */
}

// btext: {
//   color: "black",
//   padding: 10,
//   backgroundColor: "white",
//   margin:10,
// },
// buttonContainer: {
//   margin: 20,
// },
// input: {
//   borderWidth: 1,
//   borderColor: "white",
//   width: 200,
//   padding: 10,
//   margin: 20,
//   color: "white",
// },
