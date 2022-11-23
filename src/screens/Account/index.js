import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import styles from "./style";
import { StatusBar } from "expo-status-bar";
import { theme1 } from "../../theme";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
const Account = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar />
        <View style={styles.header}>
          <Text style={styles.headText}>My profile</Text>
        </View>
        <View style={styles.profileHead}>
          <Image style={styles.profilePic} source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} />
          <Text style={{ padding: "2%", color: theme1.lightBrown }}>Change Profile Picture</Text>
        </View>
        <View style={styles.formbox}>
          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Name</Text>
            <View style={styles.insidebutton}>
              <TextInput value={"Shown Mike"} style={styles.insidetText} />
              <TouchableOpacity>
                <Image style={styles.smallIcon} source={{ uri: "https://cdn-icons-png.flaticon.com/512/2213/2213475.png" }} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Phone Number</Text>
            <View style={styles.insidebutton}>
              <TextInput value={"+234 704 454 5790"} style={styles.insidetText} />
              <TouchableOpacity>
                <Image style={styles.smallIcon} source={{ uri: "https://cdn-icons-png.flaticon.com/512/2213/2213475.png" }} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Email</Text>
            <View style={styles.insidebutton}>
              <TextInput value={"Mikeshawn@gmail.com"} style={styles.insidetText} />
              <TouchableOpacity>
                <Image style={styles.smallIcon} source={{ uri: "https://cdn-icons-png.flaticon.com/512/2213/2213475.png" }} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Address</Text>
            <View style={styles.insidebutton}>
              <TextInput value={"61,Road 31, Grace avenue, lekki..."} style={styles.insidetText} />
              <TouchableOpacity>
                <Image style={styles.smallIcon} source={{ uri: "https://cdn-icons-png.flaticon.com/512/2213/2213475.png" }} />
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
    </ScrollView>
  );
};

export default Account;
