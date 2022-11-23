import { View, Text, Image, TextInput, Dimensions } from "react-native";
import React from "react";
import styles from "./style";
import { StatusBar } from "expo-status-bar";
import { theme1 } from "../../theme";
import { TouchableOpacity, TouchableHighlight } from "react-native-gesture-handler";
const Account = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.header}>
        <Text style={styles.headText}>My profile</Text>
      </View>
      <View style={styles.profileHead}>
        <Image style={styles.profilePic} source={{ url: "https://reactnative.dev/img/tiny_logo.png" }} />
        <Text style={{ padding: "2%", color: theme1.lightBrown }}>Change Profile Picture</Text>
      </View>

      <View style={styles.formbox}>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Name</Text>
          <View
            style={{
              flexDirection: "row",
              width: "90%",
              alignSelf: "center",
              backgroundColor: "#EBE1CE",
              marginVertical: "4%",
              padding: "4%",
              borderRadius: "4",
            }}
          >
            <TextInput value={"Shown Mike"} style={{ flex: 2, fontWeight: "200" }} />
            <TouchableOpacity>
              <Image style={{ width: 20, height: 20 }} source={{ url: "https://cdn-icons-png.flaticon.com/512/2213/2213475.png" }} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Phone Number</Text>
          <View
            style={{
              flexDirection: "row",
              width: "90%",
              alignSelf: "center",
              backgroundColor: "#EBE1CE",
              marginVertical: "4%",
              padding: "4%",
              borderRadius: "4",
            }}
          >
            <TextInput value={"+234 704 454 5790"} style={{ flex: 2, fontWeight: "200" }} />
            <TouchableOpacity>
              <Image style={{ width: 20, height: 20 }} source={{ url: "https://cdn-icons-png.flaticon.com/512/2213/2213475.png" }} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Email</Text>
          <View
            style={{
              flexDirection: "row",
              width: "90%",
              alignSelf: "center",
              backgroundColor: "#EBE1CE",
              marginVertical: "4%",
              padding: "4%",
              borderRadius: "4",
            }}
          >
            <TextInput value={"Mikeshawn@gmail.com"} style={{ flex: 2, fontWeight: "200" }} />
            <TouchableOpacity>
              <Image style={{ width: 20, height: 20 }} source={{ url: "https://cdn-icons-png.flaticon.com/512/2213/2213475.png" }} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Address</Text>
          <View
            style={{
              flexDirection: "row",
              width: "90%",
              alignSelf: "center",
              backgroundColor: "#EBE1CE",
              marginVertical: "4%",
              padding: "4%",
              borderRadius: "4",
            }}
          >
            <TextInput value={"61,Road 31, Grace avenue, lekki..."} style={{ flex: 2, fontWeight: "200" }} />
            <TouchableOpacity>
              <Image style={{ width: 20, height: 20 }} source={{ url: "https://cdn-icons-png.flaticon.com/512/2213/2213475.png" }} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputBox}>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "white" }}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Account;
