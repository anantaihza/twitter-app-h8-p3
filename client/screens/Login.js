import { useMutation } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { useState, useContext } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableHighlight,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

import Toast from 'react-native-root-toast';
import { LOGIN } from '../queries/query';
import * as SecureStore from 'expo-secure-store';

import { AuthContext } from '../contexts/AuthContext';

export default function Login() {
  const navigation = useNavigation();
  const { setIsSignedIn } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [login, { data, loading, error }] = useMutation(LOGIN);

  const handleLogin = async () => {
    try {
      const res = await login({
        variables: {
          email,
          password,
        },
      });
      const token = res.data.Login.access_token;
      await SecureStore.setItemAsync('access_token', token);

      setIsSignedIn(true);

      Toast.show('Login Success!', {
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
      if (error?.message) {
        Toast.show(error.message, {
          duration: Toast.durations.LONG,
          position: Toast.positions.BOTTOM,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
          backgroundColor: '#4C9EEB',
          textColor: '#FFFFFF',
        });
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={styles.containerLogin}>
        <Image
          source={require('../assets/logo-twitter.png')}
          style={styles.logo}
        />
        <Text style={styles.heading}>Login</Text>
        <Text style={styles.subHeading}>Welcome back to twitter</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={'#4C9EEB'}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor={'#4C9EEB'}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          <TouchableHighlight onPress={handleLogin} style={styles.btnSolid}>
            {loading ? (
              <ActivityIndicator size={'small'} />
            ) : (
              <Text style={styles.btnTextSolid}>Login</Text>
            )}
          </TouchableHighlight>
        </View>
        <TouchableHighlight
          onPress={() => navigation.navigate('Register')}
          style={styles.btnOutline}
        >
          <Text style={styles.btnTextOutline}>Create new account</Text>
        </TouchableHighlight>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: '#FFFFFF',
  },
  logo: {
    marginHorizontal: 'auto',
    marginVertical: 100,
  },
  heading: {
    fontWeight: '700',
    fontSize: 35,
    color: '#0C0C0C',
  },
  subHeading: {
    color: '#9D9D9D',
    marginBottom: 5,
  },
  input: {
    height: 54,
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#4C9EEB',
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  btnSolid: {
    marginTop: 30,
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: '#4C9EEB',
    borderRadius: 50,
    alignItems: 'center',
  },
  btnOutline: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: '#4C9EEB',
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 90,
    marginBottom: 20,
  },
  btnTextSolid: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
  btnTextOutline: {
    color: '#4C9EEB',
    fontWeight: '700',
    fontSize: 16,
  },
});
