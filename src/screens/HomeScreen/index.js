import {
  View,
  Text,
  TextInput,
  ScrollView,
  ImageBackground,
} from "react-native";
import React from "react";
import styles from "./style";
import PopularCard from "../../components/PopularCard";
import SpecialsCard from "../../components/SpecialsCard";

const image = {
  uri: "https://images.pexels.com/photos/14398228/pexels-photo-14398228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.container_wrapper}>
          <TextInput style={styles.text_input} placeholder="Seach for drinks" />
          <View style={styles.card_container}>
            <ImageBackground
              source={image}
              resizeMode="cover"
              style={styles.card_image}
              imageStyle={{ borderRadius: 24 }}
            >
              <Text style={styles.card_text}>
                30% discount for each order of iced Cappuccino
              </Text>
            </ImageBackground>
          </View>
          <Text style={styles.popular_card_text}>Popular</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.popular_card_items}
        >
          <PopularCard
            onClickHandler={() => {
              navigation.navigate("Details");
            }}
          />
          <PopularCard
            onClickHandler={() => {
              navigation.navigate("Details");
            }}
          />
          <PopularCard
            onClickHandler={() => {
              navigation.navigate("Details");
            }}
          />
        </ScrollView>
      </View>
      <View style={styles.container_wrapper}>
        <Text style={styles.popular_card_text}>Brew Culture specials</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.popular_card_items}
      >
        <SpecialsCard
          onClickHandler={() => {
            navigation.navigate("Details");
          }}
        />
        <SpecialsCard
          onClickHandler={() => {
            navigation.navigate("Details");
          }}
        />
      </ScrollView>
    </ScrollView>
  );
};

export default HomeScreen;
