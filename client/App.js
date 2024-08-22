import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
// import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login';
import Register from './screens/Register';
// import Home from './screens/Home';
import TabScreen from './screens/TabScreen';
import DetailPost from './screens/DetailPost';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.containerSafeArea}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Tab"
            component={TabScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Detail"
            component={DetailPost}
            options={{
              title: 'Post',
              headerTitleAlign: 'center',
              headerShadowVisible: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  containerSafeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
