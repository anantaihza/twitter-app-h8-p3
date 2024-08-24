import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Search from './Search';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, StyleSheet, Text, TouchableHighlight } from 'react-native';
import Profile from './Profile';
import * as SecureStore from 'expo-secure-store';
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';
import Toast from 'react-native-root-toast';

const Tab = createBottomTabNavigator();

export default function TabScreen() {
  const { setIsSignedIn } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await SecureStore.deleteItemAsync('access_token');

      setIsSignedIn(false);
      Toast.show('You logged out', {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        backgroundColor: '#4C9EEB',
        textColor: '#FFFFFF',
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerStyle: {
            height: 80,
          },
          headerRight: () => {
            return (
              <TouchableHighlight onPress={handleLogout} style={styles.btnLogout} underlayColor="none" activeOpacity={0.5}>
                <Text>Log out</Text>
              </TouchableHighlight>
            );
          },
          headerTitle: () => {
            return <Image source={require('../assets/icon-twitter.png')} />;
          },
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
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarShowLabel: false,
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerStyle: {
            height: 80,
          },
          headerTitle: () => {
            return <Image source={require('../assets/icon-twitter.png')} />;
          },
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <Ionicons name="search" size={size} color={color} />;
            } else {
              return (
                <Ionicons name="search-outline" size={size} color={color} />
              );
            }
          },
        }}
      />
      {/* <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarShowLabel: false,
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerStyle: {
            height: 80,
          },
          headerTitle: () => {
            return <Image source={require('../assets/icon-twitter.png')} />;
          },
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <FontAwesome name="user" size={22} color={color} />;
            } else {
              return <FontAwesome name="user-o" size={20} color={color} />;
            }
          },
        }}
      /> */}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  btnLogout: {
    marginHorizontal: 20
  }
})