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

export default function CreatePost() {
  const handleCreate = () => {

  }
  return (
    <View style={styles.containerAdd}>
      <Text style={styles.headingAdd}>New Tweet</Text>

      <View style={styles.form}>
        {/* Content */}
        <TextInput
          style={styles.input}
          placeholder="Tweet"
          placeholderTextColor={'#4C9EEB'}
        />
        {/* Tags */}
        <TextInput
          style={styles.input}
          placeholder="Tags"
          placeholderTextColor={'#4C9EEB'}
        />
        {/* ImgUrl */}
        <TextInput
          style={styles.input}
          placeholder="Image Url"
          placeholderTextColor={'#4C9EEB'}
        />

        <TouchableHighlight onPress={handleCreate} style={styles.btnSolid}>
          <Text style={styles.btnTextSolid}>Tweet</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerAdd: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  headingAdd: {
    fontSize: 25,
    fontWeight: '700',
    marginTop: 20,
    // textAlign: "center"
  },
  form: {
    marginTop: 20,
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
  btnTextSolid: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
});
