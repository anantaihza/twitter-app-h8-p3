import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import { ADD_FOLLOW, GET_USER_ID } from '../queries/query';
import { useMutation } from '@apollo/client';

export default function ButtonFollow({ followId }) {
  const [addFollow, { data, loading, error }] = useMutation(ADD_FOLLOW, {
    refetchQueries: [GET_USER_ID],
  });

  const handleFollow = async () => {
    try {
      await addFollow({
        variables: {
          followingId: followId
        }
      })
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <TouchableHighlight
      style={styles.btnFollow}
      underlayColor="#4C9EEB"
      onPress={handleFollow}
    >
      <Text style={styles.textFollow}>Follow</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  btnFollow: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: '#4C9EEB',
    paddingHorizontal: 20,
    paddingVertical: 10,
    right: 20,
    top: 10,
    borderRadius: 50,
    color: '#FFFFFF',
  },
  textFollow: {
    color: '#4C9EEB',
  },
});
