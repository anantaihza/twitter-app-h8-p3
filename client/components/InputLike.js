import { useState } from 'react';
import Toast from 'react-native-root-toast';
import { ActivityIndicator, StyleSheet, Text } from 'react-native';
import { ADD_LIKE, GET_POSTS } from '../queries/query';
import { useMutation } from '@apollo/client';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function InputLike({ postId }) {
  const [isLike, setIsLike] = useState(false);

  const [addLike, { data, loading, error }] = useMutation(ADD_LIKE, {
    refetchQueries: [GET_POSTS],
  });

  const handleLike = async () => {
    try {
      await addLike({
        variables: {
          postId,
        },
      });
      Toast.show('You liked this tweet', {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        backgroundColor: '#4C9EEB',
        textColor: '#FFFFFF',
      });
      setIsLike((like) => !like);
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
    <>
      {loading ? (
        <ActivityIndicator size={'small'} />
      ) : (
        <Text style={styles.postItemAction} onPress={handleLike}>
          {isLike ? (
            <AntDesign name="heart" size={16} color="#4C9EEB" />
          ) : (
            <AntDesign name="hearto" size={16} color="#0C0C0C" />
          )}
        </Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  postItemAction: {
    color: '#0C0C0C',
    fontSize: 16,
  },
});
