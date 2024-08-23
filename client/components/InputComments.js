import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import { GET_POSTS, ADD_COMMENT } from '../queries/query';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useMutation } from '@apollo/client';
import { useState } from 'react';

export default function InputComments({ postId }) {
  const [content, setContent] = useState('');

  const [addComment, { data, loading, error }] = useMutation(ADD_COMMENT, {
    refetchQueries: [GET_POSTS],
  });

  const handleComment = async () => {
    try {
      if (content !== "") {
        await addComment({
          variables: {
            content,
            postId,
          },
        });
      }
      setContent("")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.inputComment}>
      <TextInput
        style={styles.input}
        placeholder="Type comment...."
        // keyboardType=""
        value={content}
        onChangeText={(text) => setContent(text)}
        onSubmitEditing={handleComment}
      />
      <TouchableHighlight
        onPress={handleComment}
        underlayColor="none"
        activeOpacity={0.5}
      >
        <Text style={styles.btnText}>
          <Ionicons name="send" size={24} color="#4C9EEB" />
        </Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  inputComment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  input: {
    width: 320,
    height: 50,
  },
  btnComment: {},
  btnText: {},
});
