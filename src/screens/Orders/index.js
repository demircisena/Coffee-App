import { View, Text, TextInput } from "react-native";
import React from "react";
import styles from "./style";
const Orders = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerSearch}>
        <Text style={styles.text}>lets find your drink</Text>
        <TextInput style={styles.text_input} placeholder="Search for drinks" ></TextInput>
      </View>

    </View>
  );
};

export default Orders;
