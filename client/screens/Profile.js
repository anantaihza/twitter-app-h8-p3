import { useMutation, useQuery } from '@apollo/client';
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
import { ADD_FOLLOW, GET_USER_ID } from '../queries/query';
import { useNavigation } from '@react-navigation/native';
import ButtonFollow from '../components/ButtonFollow';

export default function Profile({ route }) {
  const navigation = useNavigation()
  const { userId } = route.params;

  const { data, loading, error } = useQuery(GET_USER_ID, {
    variables: {
      userId: userId,
    },
  });

  return (
    <ScrollView>
      <View style={styles.banner}></View>
      <View style={styles.containerProfile}>
        {/* <Text>{JSON.stringify(data?.GetUser)}</Text> */}

        <View style={styles.avatar}></View>
        <View>
          <Text style={styles.name}>{data?.GetUser?.name}</Text>
          <Text style={styles.username}>@{data?.GetUser?.username}</Text>
        </View>
        <View style={styles.sectionCount}>
          <Text style={styles.itemCount}>
            <Text style={styles.count}>{data?.GetUser?.followings.length}</Text>{' '}
            Followings
          </Text>
          <Text style={styles.itemCount}>
            <Text style={styles.count}>{data?.GetUser?.followers.length}</Text>{' '}
            Followers
          </Text>
        </View>
        {/* <TouchableHighlight
          style={styles.btnFollow}
          underlayColor="#4C9EEB"
          onPress={handleFollow}
        >
          <Text style={styles.textFollow}>Follow</Text>
        </TouchableHighlight> */}
        <ButtonFollow followId={data?.GetUser?._id} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 100,
    backgroundColor: '#CED5DC',
  },
  containerProfile: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    position: 'relative',
    paddingTop: 45,
    paddingBottom: 20,
  },
  avatar: {
    height: 80,
    width: 80,
    backgroundColor: '#EFEFEF',
    borderRadius: 100,
    position: 'absolute',
    top: -40,
    left: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 30,
  },
  username: {
    color: '#9D9D9D',
    lineHeight: 20,
  },
  sectionCount: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 20,
  },
  itemCount: {
    fontWeight: '700',
    color: '#9D9D9D',
    fontSize: 14,
  },
  count: {
    color: '#0C0C0C',
  },
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
