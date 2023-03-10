import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Bus from "./Bus";

import Display from "./Display";
import Sourcedestination from "./Source-destination";
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Sourcedestination} />
        <Stack.Screen name="Trains" component={Display} />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
