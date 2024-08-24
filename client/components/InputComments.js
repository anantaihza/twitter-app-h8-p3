import { useState } from 'react';
import Toast from 'react-native-root-toast';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import { useMutation } from '@apollo/client';
import { GET_POSTS, ADD_COMMENT } from '../queries/query';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function InputComments({ postId }) {
  const [content, setContent] = useState('');

  const [addComment, { data, loading, error }] = useMutation(ADD_COMMENT, {
    refetchQueries: [GET_POSTS],
  });

  const handleComment = async () => {
    try {
      if (content !== '') {
        await addComment({
          variables: {
            content,
            postId,
          },
        });
      }
      setContent('');
      Toast.show('Add comment success', {
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
    <View style={styles.inputComment}>
      <TextInput
        style={styles.input}
        placeholder="Type comment...."
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
          {loading ? (
            <ActivityIndicator size={'small'} />
          ) : (
            <Ionicons name="send" size={24} color="#4C9EEB" />
          )}
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
