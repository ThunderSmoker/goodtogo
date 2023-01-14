import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Settings from './Display';
import Sourcedestination from './Source-destination';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Sourcedestination} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
export default Tabs