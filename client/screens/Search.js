import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { SEARCH } from '../queries/query';

const searchs = [
  {
    _id: '66c3052529e3d3b8cd502e1f',
    name: 'user1',
    username: 'user1',
    email: 'user1@mail.com',
  },
  {
    _id: '66c31bb47c8fa33dcb8a3b3d',
    name: 'user2',
    username: 'user2',
    email: 'user2@mail.com',
  },
  {
    _id: '66c48b5240fa26e989301deb',
    name: 'user3',
    username: 'user3',
    email: 'user3@mail.com',
  },
  {
    _id: '66c5a094722ca32ef0aa0d03',
    name: 'user4',
    username: 'user4',
    email: 'user4@mail.com',
  },
];

export default function Search() {
  const [search, setSearch] = useState('');
  const { data, loading, error, refetch } = useQuery(SEARCH, {
    // manual: true,
    variables: {
      search: search === '' ? null : search,
    },
  });
  // console.log(data?.SearchUser)

  const handleSearch = () => {
    // refetch()
    // try {
    //   await findUsers({
    //     variables: {
    //       search,
    //     },
    //   });
    //   console.log(data)
    // } catch (error) {
    //   console.log(error);
    // }
  };
  const handleUser = () => {};
  return (
    <>
      <View style={styles.inputComment}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
        <TouchableHighlight
          onPress={handleSearch}
          underlayColor="none"
          activeOpacity={0.5}
        >
          <Text style={styles.btnText}>
            <Ionicons name="search" size={24} color="#4C9EEB" />
          </Text>
        </TouchableHighlight>
      </View>
      <FlatList
        data={data?.SearchUser}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableHighlight onPress={handleUser}>
              <View style={styles.result}>
                <Text style={styles.resultName}>{item.name}</Text>
                <Text style={styles.resultUsername}>{item.username}</Text>
              </View>
            </TouchableHighlight>
          );
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  inputComment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  input: {
    width: 320,
    height: 50,
  },
  result: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 0.3,
    borderTopWidth: 0.3,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#9D9D9D',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  resultName: {
    fontSize: 14,
    fontWeight: '700',
  },
  resultUsername: {
    fontSize: 14,
    color: '#9D9D9D',
  },
});
