import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";

const PaymentDone = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.check}>
        <Icon name="check-circle" size={100} color={"#fff"} />
      </View>
      <View>
        <Text style={styles.message}>Your payment was successful.</Text>
        <Text style={styles.message}>Please check the delivery status.</Text>
      </View>

      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Tracking Status</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PaymentDone;
