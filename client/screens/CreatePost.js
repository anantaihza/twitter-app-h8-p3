import { useMutation } from '@apollo/client';
import { useState } from 'react';
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
  Button
} from 'react-native';
import { ADD_POST, GET_POSTS } from '../queries/query';
import { useNavigation } from '@react-navigation/native';

export default function CreatePost() {
  const navigation = useNavigation();
  const [content, setContent] = useState('Post Example 1');
  const [tags, setTags] = useState(['Design', 'Food']);
  const [tag, setTag] = useState('');
  const [tagss, setTagss] = useState([]);
  const [imgUrl, setImgUrl] = useState(
    'https://cdn0-production-images-kly.akamaized.net/Xc1138UZHofwKdQQRH1C4O0t9EE=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/892150/original/048455900_1433335401-kucingmelet5.jpg'
  );

  const [addPost, { data, loading, error }] = useMutation(ADD_POST, {
    refetchQueries: [GET_POSTS],
    onCompleted: () => navigation.navigate('Home'),
  });

  const handleCreate = async () => {
    try {
      await addPost({
        variables: {
          newPost: {
            content,
            tags,
            imgUrl,
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.containerAdd}>
      <Text style={styles.headingAdd}>New Tweet</Text>

      <View style={styles.form}>
        {/* Content */}
        <TextInput
          style={styles.input}
          placeholder="Tweet"
          placeholderTextColor={'#4C9EEB'}
          value={content}
          onChangeText={(text) => setContent(text)}
        />
        {/* Tags */}
        <TextInput
          style={styles.input}
          placeholder="Tags"
          placeholderTextColor={'#4C9EEB'}
          value={tags}
          onChangeText={(text) => setTags(text)}
        />

{/* BARUUUU ----- */}
        <TextInput
          style={styles.input}
          placeholder="Tag"
          placeholderTextColor={'#4C9EEB'}
          value={tag}
          onChangeText={(text) => setTag(text)}
        />
      
        <Button title='Click' onPress={() => setTagss([...tagss, tag])} />
        {
          tagss.map(el => <Text>{el}</Text>)
        }

        {/* ImgUrl */}
        <TextInput
          style={styles.input}
          placeholder="Image Url"
          placeholderTextColor={'#4C9EEB'}
          value={imgUrl}
          onChangeText={(text) => setImgUrl(text)}
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
