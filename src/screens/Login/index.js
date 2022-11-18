import { View, Text } from "react-native";
import React from "react";
import styles from "./style";
import Button from "../../components/Button";
const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button
        onClickHandler={() => {
          navigation.navigate("Main");
        }}
      />
    </View>
  );
};

export default Login;
