import { View, Text, TextInput, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import Button from "../../components/Button";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../firebaseConfig";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // async function registerUser() {
  //   try {
  //     await createUserWithEmailAndPassword(auth, "mustafa.dede.0016@gmail.com", "1234567");
  //     console.log("user created");
  //     navigation.navigate("Main");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async function loginUser() {
    try {
      await signInWithEmailAndPassword(
        auth,
        "mustafa.dede.0016@gmail.com",
        "1234567"
      );
      console.log("user logged in");
      navigation.navigate("Main");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <KeyboardAvoidingView style={styles.wrapper}>
      <View style={styles.container}>
        {/* <TextInput
          placeholder="Your email"
          style={styles.input}
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          placeholder="Your password"
          style={styles.input}
          value={password}
          onChangeText={(password) => setPassword(password)}
          secureTextEntry
        /> */}
        <Button
          onClickHandler={() => {
            loginUser();
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
