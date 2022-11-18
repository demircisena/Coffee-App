import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { theme1 } from "../theme";

const OrdersCard = () => {
  return (
    <TouchableOpacity
      style={{
        width: "100%",
        height: "30%",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          width: "40%",
          height: "100%",
          backgroundColor: theme1.clearBrown,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../../assets/images/coffee-cup.png")}
          style={{
            height: "90%",
            width: "100%",
          }}
        />
      </View>
      <View
        style={{
          padding: 24,
          width: "60%",
          height: "100%",
          paddingHorizontal: 24,
        }}
      >
        <Text
          style={{ fontSize: 21, color: theme1.lightBrown, fontWeight: "bold" }}
        >
          Coconut coffee
        </Text>
        <Text style={{ fontSize: 14, color: "gray" }}>with oat milk</Text>
      </View>
    </TouchableOpacity>
  );
};

export default OrdersCard;
