import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
// import Map from "./components/Map";
import MyStack from "./components/Stack";
import Tabs from "./components/Tabs";

export default function App() {
  return (
    // <View style={styles.container}>
    <NavigationContainer  independent={true}>

      <Tabs/>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
