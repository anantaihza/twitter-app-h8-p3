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
import { useMutation, useQuery, useLazyQuery } from '@apollo/client';
import { SEARCH } from '../queries/query';
import { useNavigation } from '@react-navigation/native';

export default function Search() {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [getSearch, { data, loading, error }] = useLazyQuery(SEARCH);

  const handleSearch = async () => {
    try {
      await getSearch({
        variables: {
          search: search === '' ? null : search,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleUser = (userId) => {
    navigation.navigate('Profile', {
      userId: userId,
    });
  };

  return (
    <>
      <View style={styles.inputComment}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={search}
          onChangeText={(text) => setSearch(text)}
          onSubmitEditing={handleSearch}
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
            <TouchableHighlight onPress={() => handleUser(item._id)}>
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
