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
  Button,
  FlatList,
} from 'react-native';
import { ADD_POST, GET_POSTS } from '../queries/query';
import { useNavigation } from '@react-navigation/native';

export default function CreatePost() {
  const navigation = useNavigation();
  const [content, setContent] = useState('Post Example 1');

  const [inputTag, setInputTag] = useState('');
  const [tags, setTags] = useState([]);

  // const [tag, setTag] = useState('');
  // const [tagss, setTagss] = useState([]);

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

  const handleTag = () => {
    if (inputTag !== '') {
      setTags([...tags, inputTag]);
      setInputTag('');
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
        <View style={styles.containerTag}>
          <View style={styles.containerInputTag}>
            <TextInput
              style={styles.inputTag}
              placeholder="Input tag..."
              placeholderTextColor={'#4C9EEB'}
              value={inputTag}
              onChangeText={(text) => setInputTag(text)}
            />

            <TouchableHighlight onPress={handleTag} style={styles.btnAddTag}>
              <Text style={styles.btnAddTagText}>Add tag</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.pillGroup}>
            <Text>Tags: </Text>
            {tags.map((tag, index) => {
              return (
                <View style={styles.pill} key={index}>
                  <Text style={styles.pillName}>{tag}</Text>
                </View>
              );
            })}
          </View>
        </View>

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
  inputTag: {
    flex: 1,
    height: 54,
    marginTop: 8,
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
  btnAddTag: {
    paddingVertical: 18,
    paddingHorizontal: 20,
    backgroundColor: '#4C9EEB',
    borderRadius: 50,
  },
  btnAddTagText: {
    color: '#FFFFFF',
  },
  containerTag: {
    marginTop: 10,
  },
  containerInputTag: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  pillGroup: {
    paddingHorizontal: 15,
    marginVertical: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 6,
  },
  pill: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    // borderWidth: 1,
    backgroundColor: '#4C9EEB',
    borderRadius: 50,
  },
  pillName: {
    color: '#FFFFFF',
  },
});
