import { useNavigation } from '@react-navigation/native';
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

export default function Register() {
  const navigation = useNavigation()
  const handleRegister = () => {};

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
            // onChangeText={onChangeText}
            // value={text}
          />
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor={'#4C9EEB'}
            // onChangeText={onChangeText}
            // value={text}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={'#4C9EEB'}
            // onChangeText={onChangeText}
            // value={text}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={'#4C9EEB'}
            // onChangeText={onChangeText}
            // value={text}
          />

          <TouchableHighlight onPress={handleRegister} style={styles.btnSolid}>
            <Text style={styles.btnTextSolid}>Register</Text>
          </TouchableHighlight>
        </View>

        <TouchableHighlight onPress={() => navigation.navigate("Login")} style={styles.btnOutline}>
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
    position: "relative"
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
    marginBottom: 5
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
    marginBottom: 20
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
