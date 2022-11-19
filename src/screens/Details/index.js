import { Text, Image, View, ScrollView, TextInput } from "react-native";
import React from "react";
import styles from "./styles";
import Line from "../../components/Line";
import Checkbox from 'expo-checkbox';
import { theme1 } from "../../theme";

const Details = () => {

  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <View style={styles.header_background}></View>
        <Image source={require("../../../assets/images/coffee-cup.png")} style={styles.header_image} />
      </View>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.coffee_title}>
            <Text style={styles.coffee_name}>Coconut coffee</Text>
            <Text style={styles.coffee_star}>★ 4.7</Text>
          </View>
          <Text style={styles.coffee_info}>The coconut coffee is a morning special delight that is deliciously brewed for our esteem users.</Text>
        </View>
        <Line />
        <View style={styles.size_content}>
          <Text style={styles.coffee_size_title}>Size</Text>
          <View style={styles.coffee_size_wrapper}>
            <View style={styles.coffee_size}>
              <Image source={require("../../../assets/images/coffee-size.png")}
                style={styles.coffee_small_size}
              />
              <Text>Small</Text>
            </View>
            <View style={styles.coffee_size}>
              <Image source={require("../../../assets/images/coffee-size.png")}
                style={styles.coffee_medium_size}
              />
              <Text>Medium</Text>
            </View>
            <View style={styles.coffee_size}>
              <Image source={require("../../../assets/images/coffee-size.png")}
                style={styles.coffee_large_size}
              />
              <Text>Large</Text>
            </View>
            <View style={styles.coffee_size}>
              <Image source={require("../../../assets/images/coffee-size.png")}
                style={styles.coffee_extralarge_size}
              />
              <Text>Extra Large</Text>
            </View>
          </View>
        </View>
        <Line />
        <View style={styles.topping_container}>
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
          <Text style={styles.note_title}>
            Do you have another request?
          </Text>
          <TextInput
            style={styles.note}
            placeholder="Note..."
            multiline={true}
          />
        </View>
        <Line />
      </ScrollView>
    </View>
  );
};

export default Details;
