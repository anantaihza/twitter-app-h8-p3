import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Search from './Search';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

export default function TabScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => {
            return <Image source={require('../assets/icon-twitter.png')} />;
          },
          headerTitleAlign: 'center',
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return (
                <MaterialCommunityIcons name="home" size={size} color={color} />
              );
            } else {
              return (
                <MaterialCommunityIcons
                  name="home-outline"
                  size={size}
                  color={color}
                />
              );
            }
          },
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <Ionicons name="search" size={size} color={color} />;
            } else {
              return (
                <Ionicons name="search-outline" size={size} color={color} />
              );
            }
          },
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
}
