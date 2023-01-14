import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Bus from "./Bus";
import Settings from "./Display";
import MyStack2 from "./Mystack2";
import Ionicons from "react-native-vector-icons/Ionicons";
import Sourcedestination from "./Source-destination";
import MyStack from "./Stack";
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Bus") {
            iconName = focused ? "ios-list" : "ios-list-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={MyStack} />
      <Tab.Screen name="Bus" component={MyStack2} />
    </Tab.Navigator>
  );
}
export default Tabs;
