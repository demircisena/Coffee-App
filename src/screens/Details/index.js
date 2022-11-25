import { Text, Image, View, ScrollView, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import Line from "../../components/Line";
import Checkbox from 'expo-checkbox';
import { theme1 } from "../../theme";
import { Entypo } from "@expo/vector-icons";
import {
  increment,
  decrement,
  addToOrder,
} from "../../redux/features/addOrder/addOrderSlice";
import { useDispatch, useSelector } from "react-redux";

const Details = ({ navigation }) => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const total = 7.5 * count + 4;
  console.log(useSelector((state) => state.counter.orders));
  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <View style={styles.header_background}></View>
        <Image
          source={require("../../../assets/images/coffee-cup.png")}
          style={styles.header_image}
        />
      </View>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.coffee_title}>
            <Text style={styles.coffee_name}>Coconut coffee</Text>
            <Text style={styles.coffee_star}>★ 4.7</Text>
          </View>
          <Text style={styles.coffee_info}>
            The coconut coffee is a morning special delight that is deliciously
            brewed for our esteem users.
          </Text>
        </View>
        <Line />
        <View style={styles.size_content}>
          <Text style={styles.coffee_size_title}>Size</Text>
          <View style={styles.coffee_size_wrapper}>
            <View style={styles.coffee_size}>
              <Image
                source={require("../../../assets/images/coffee-size.png")}
                style={styles.coffee_small_size}
              />
              <Text>Small</Text>
            </View>
            <View style={styles.coffee_size}>
              <Image
                source={require("../../../assets/images/coffee-size.png")}
                style={styles.coffee_medium_size}
              />
              <Text>Medium</Text>
            </View>
            <View style={styles.coffee_size}>
              <Image
                source={require("../../../assets/images/coffee-size.png")}
                style={styles.coffee_large_size}
              />
              <Text>Large</Text>
            </View>
            <View style={styles.coffee_size}>
              <Image
                source={require("../../../assets/images/coffee-size.png")}
                style={styles.coffee_extralarge_size}
              />
              <Text>Extra Large</Text>
            </View>
          </View>
        </View>
        <Line />
        <View>
          <Text style={styles.topping_title}>Toppings</Text>
          <View style={styles.topping_content}>
            <View style={styles.checkbox}>
              <Checkbox
                value={true}
                color={true ? theme1.lightBrown : undefined}
              />
              <Text style={styles.topping_name}>Cheese</Text>
            </View>
            <Text>+$4.00</Text>
          </View>
          <View style={styles.topping_content}>
            <View style={styles.checkbox}>
              <Checkbox
                value={false}
                color={true ? theme1.lightBrown : undefined}
              />
              <Text style={styles.topping_name}>Cream</Text>
            </View>
            <Text></Text>
          </View>
        </View>
        <Line />
        <View style={styles.note_content}>
          <Text style={styles.note_title}>Do you have another request?</Text>
          <TextInput
            textAlignVertical="top"
            style={styles.note}
            placeholder="Note..."
            multiline={true}
          />
        </View>
        <Line />
        <View style={styles.quantity_container}>
          <Text style={styles.quantity_title}>Quantity</Text>
          <View style={styles.quantity_content}>
            <TouchableOpacity
              disabled={count <= 1 ? true : false}
              onPress={() => {
                dispatch(decrement());
              }}
            >
              <Text style={styles.quantity_info}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity_info}>{count}</Text>
            <TouchableOpacity
              onPress={() => {
                dispatch(increment());
              }}
            >
              <Text style={styles.quantity_info}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Line />
        <View style={styles.price_container}>
          <View style={styles.price_content}>
            <Text style={styles.price_title}>Price</Text>
            <View style={styles.price_info}>
              <Text style={styles.main_price}>${7.5 * count}</Text>
              <Text style={styles.addition_price}>+$4.00</Text>
              <Text style={styles.total_price}>${total}</Text>
            </View>
          </View>
          <View style={styles.price_buttons}>
            <TouchableOpacity
              style={styles.order_button}
              onPress={() => {
                dispatch(
                  addToOrder({ title: "Coconunt Coffee", price: total })
                );
              }}
            >
              <Text style={styles.button_text}>Add to order</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cart_button}
              onPress={() => navigation.navigate("Cart")}
            >
              <Entypo name="shopping-cart" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Details;
