import { useMutation } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
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
} from 'react-native';
import { REGISTER } from '../queries/query';
import Toast from 'react-native-root-toast';

export default function Register() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [register, { data, loading, error }] = useMutation(REGISTER, {
    onCompleted: () => {
      navigation.navigate('Login');
    },
  });

  const handleRegister = async () => {
    try {
      await register({
        variables: {
          newUser: {
            name,
            username,
            email,
            password,
          },
        },
      });
      Toast.show('Success to create account!', {
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

  // useEffect(() => {
  //   console.log(name)
  // }, [name])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={styles.containerLogin}>
        <Image
          source={require('../assets/logo-twitter.png')}
          style={styles.logo}
        />
        <Text style={styles.heading}>Register</Text>
        <Text style={styles.subHeading}>Welcome to the new twitter</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor={'#4C9EEB'}
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor={'#4C9EEB'}
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
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

          <TouchableHighlight onPress={handleRegister} style={styles.btnSolid}>
            <Text style={styles.btnTextSolid}>Register</Text>
          </TouchableHighlight>
        </View>

        <TouchableHighlight
          onPress={() => navigation.navigate('Login')}
          style={styles.btnOutline}
        >
          <Text style={styles.btnTextOutline}>Login to your account</Text>
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
    position: 'relative',
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
    marginTop: 80,
    marginBottom: 20,
    // position: "relative",
    // bottom: -50,
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
