import React, { Component, useRef, useState } from "react";
import { Form, FormItem } from "react-native-form-component";
import data from "../assets/data.json";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import { Icon } from "react-native-elements";

const img = "https://docs.expo.dev/static/images/tutorial/initial-layout.jpg";
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
const Bus = ({ navigation }) => {
  const sourceinput = useRef();
  const destinationinput = useRef();
  const handleSubmit = async () => {
    try {
      const url = "https://train-api.onrender.com/api/v1/bus/getbusbetween";

      const src = source;
      const dest = destination;
      console.log(src, dest);
      const res = await axios.get(url, {
        params: {
          fromData: src.toLowerCase(),
          toData: dest.toLowerCase(),
        },
      });
      const info = res.data;
      navigation.navigate("Buses", { data: info });
    } catch (error) {
      console.log(error.message);
    }
  };
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  return (
    <ScrollView style={{ width: "100%" }}>
      <View style={styles.imagepic}>
        <ImageBackground
          source={{
            uri: "https://images.pexels.com/photos/1173777/pexels-photo-1173777.jpeg?auto=compress&cs=tinysrgb&w=600",
          }}
          resizeMode="stretch"
          style={styles.img}
        >
          <Text style={styles.title}>Want To Explore Pune</Text>
          <Text style={styles.title1}>We Made Your Travel Easy!</Text>

          <Form
            onButtonPress={handleSubmit}
            buttonText="You are Good to Go.."
            buttonStyle={{ marginTop: 8 }}
          >
            <FormItem
              isRequired
              placeholder="Enter Source Location in Pune"
              value={source}
              style={styles.inputbox}
              onChangeText={(source) => setSource(source)}
              ref={sourceinput}
            />
            <FormItem
              isRequired
              placeholder="Enter Destination Location in Pune"
              value={destination}
              style={styles.inputbox1}
              onChangeText={(destination) => setDestination(destination)}
              ref={destinationinput}
            />
          </Form>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  img: {
    height: screenHeight,
    width: screenWidth,
    alignItems: "center",
  },
  input: {
    height: 40,
    margin: 0,
    borderWidth: 2,
    padding: 10,
  },
  inputbox: {
    height: 45,
    width: 300,
    outline: "none",
    backgroundColor: "white",
    fontSize: 16,
    borderRadius: 5,
    paddingLeft: 15,
    border: "1px solid #ccc",
    borderBottomWidth: 2,
    transition: "all 0.3s ease",
    marginTop: 40,
  },
  inputbox1: {
    height: 45,
    width: 300,
    outline: "none",
    backgroundColor: "white",
    fontSize: 16,
    borderRadius: 5,
    paddingLeft: 15,
    border: "1px solid #ccc",
    borderBottomWidth: 2,
    transition: "all 0.3s ease",
    marginTop: 5,
  },
  title: {
    fontFamily: "sans-serif",
    fontWeight: "bold",
    fontSize: 34.5,
    color: "white",
    textShadow: "2px 2px 4px black",
    marginTop: 20,
  },
  labelstyle2: {
    fontSize: 10,
    color: "white",
  },
  title1: {
    fontFamily: "sans-serif",
    fontWeight: "bold",
    fontSize: 20.5,
    color: "white",
    textShadow: "2px 2px 4px black",
  },
  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
  imagepic: {
    background: `url(${img})`,
  },
  red: {
    color: "red",
  },
});
export default Bus;
