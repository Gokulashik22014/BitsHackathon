import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { auth } from "../firebaseConfig.js";
import { handleSignIn } from "../controllers/user.js";
import { useNavigation } from "@react-navigation/native"
const SignIn = () => {
  const [userType, setUserType] = useState("individual");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user,setUser]=useState()
  const navigation = useNavigation();
  useEffect(()=>{
    setUser(auth.currentUser)
    if (auth.currentUser) {
      navigation.replace("(tabs)"); // Replace with your screen name
    }
  },[auth.currentUser])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      {/* User Type Selection (Radio Buttons) */}
      <View style={styles.radioContainer}>
        <TouchableOpacity
          style={[
            styles.radioButton,
            userType === "individual" && styles.radioSelected,
          ]}
          onPress={() => setUserType("individual")}
        >
          <Text style={styles.radioText}>Individual</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.radioButton,
            userType === "organization" && styles.radioSelected,
          ]}
          onPress={() => setUserType("organization")}
        >
          <Text style={styles.radioText}>Organization</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
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

      <Button title="Sign Up" />
      <TouchableOpacity onPress={()=>handleSignIn(userType,email,password)}>
        <Text>Google Sigin</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SignIn;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },

  // Radio Button Styles
  radioContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  radioButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 5,
    marginHorizontal: 10,
  },
  radioSelected: { backgroundColor: "#007bff", borderColor: "#007bff" },
  radioText: { color: "white", fontWeight: "bold" },

  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
});
