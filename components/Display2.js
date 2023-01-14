import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TextInput,
  ScrollView,
} from "react-native";
import { Card, ListItem, Button, Icon, FAB } from "react-native-elements";
const Display = ({ navigation, route }) => {
  const name = route.params.data;
  const from = JSON.stringify(name.from).toUpperCase();
  const to = JSON.stringify(name.to).toUpperCase();
  return (
    <View >
      <FAB title="Create" placement="right" />
      <Text
        style={{
          fontFamily: "sans-serif",
          fontWeight: "bold",
          fontSize: 34.5,
          color: "black",
          textShadow: "2px 2px 4px black",
          marginLeft: 89,
        }}
      >
        All Buses
      </Text>

      <Card style={{shadowColor:"black",shadowOffset:{
        width:0,height:6,
    },shadowOpacity:0.39,shadowRadius:8.30,elevation:13}}>
        <Card.Title>
          {from} to {to}
        </Card.Title>
        <Card.Divider />
        <Card.Image
          source={{
            uri: "https://img.freepik.com/premium-vector/bus-icon_609277-1523.jpg?w=2000",
          }}
          style={{ marginRight: 200, height: 70, width: 100, marginTop: 3 }}
        />

        <Text
          style={{
            marginBottom: 10,
            position: "absolute",
            marginTop: 45,
            marginLeft: 140,
            fontWeight: "700",
          }}
        >
          {name.from} ➡ {name.to}
        </Text>
        <Text
          style={{
            marginBottom: 10,
            position: "absolute",
            marginTop: 65,
            marginLeft: 140,
            fontWeight: "700",
          }}
        >
          {name.departureTime} {name.arrivalTime}
        </Text>
        <Button color="black" title="🗺View Route" />
      </Card>
    </View>
  );
};
export default Display;
