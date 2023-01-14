import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Bus from "./Bus";

import Display2 from "./Display2";
import Sourcedestination from "./Source-destination";
const Stack = createNativeStackNavigator();

const MyStack2 = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Bus" component={Bus} />
        <Stack.Screen name="Buses" component={Display2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack2;
