import { useMutation } from '@apollo/client';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ADD_LIKE, GET_POSTS, GET_POST_ID } from '../queries/query';

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
    } catch (error) {
      console.log(error);
    }
    // setIsLike((like) => !like)
  };

  // useEffect(() => {

  // }, [likes])

  return (
    <Text style={styles.postItemAction} onPress={handleLike}>
      {isLike ? (
        <AntDesign name="heart" size={16} color="#4C9EEB" />
      ) : (
        <AntDesign name="hearto" size={16} color="#0C0C0C" />
      )}
    </Text>
  );
}

const styles = StyleSheet.create({
  postItemAction: {
    color: '#0C0C0C',
    fontSize: 16,
  },
});
