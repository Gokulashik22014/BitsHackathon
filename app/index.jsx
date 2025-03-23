import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import {handleLogin} from "../controllers/user.js"
import { auth } from "@/firebaseConfig.js";
import { useNavigation } from "@react-navigation/native"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user,setUser]=useState()
  const navigation = useNavigation();
  useEffect(()=>{
    setUser(auth.currentUser)
    console.log(auth.currentUser)
    if (auth.currentUser) {
      navigation.replace("(tabs)"); // Replace with your screen name
    }
  },[auth.currentUser])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} >
      <Link href="(tabs)">
        Login
      </Link>
      </TouchableOpacity>
      <Link href="/signIn">
        Go to About screen
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  button:{fontSize:12,backgroundColor:"blue",padding:20,borderRadius:12,color:"#ffffff", textAlign:"center"}
});

export default Login;
