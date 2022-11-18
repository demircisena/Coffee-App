import { SafeAreaView, Text, Image, View, ScrollView } from "react-native";
import React from "react";
import styles from "./styles";
import Line from "../../components/Line";

const Details = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <View style={styles.header_background}></View>
        <Image source={require("../../../assets/images/coffee-cup.png")} style={styles.header_image} />
      </View>
      <ScrollView style={styles.content}>
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
      </ScrollView>
    </View>
  );
};

export default Details;
