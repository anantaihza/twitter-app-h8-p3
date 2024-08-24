import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Register from './Register';
import TabScreen from './TabScreen';
import CreatePost from './CreatePost';
import DetailPost from './DetailPost';

const Stack = createNativeStackNavigator();

import * as SecureStore from 'expo-secure-store';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Profile from './Profile';

export default function MainStack() {
  const { isSignedIn, setIsSignedIn } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const checkLogin = async () => {
    try {
      setLoading(true);
      const token = await SecureStore.getItemAsync('access_token');
      if (token) setIsSignedIn(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          {isSignedIn ? (
            <>
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
              <Stack.Screen
                name="Add"
                component={CreatePost}
                options={{
                  title: 'Create Post',
                  headerTitleAlign: 'center',
                  headerShadowVisible: false,
                }}
              />
              <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                  title: '',
                  headerTitleAlign: 'center',
                  headerShadowVisible: false,
                }}
              />
            </>
          ) : (
            <>
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
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
