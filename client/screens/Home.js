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
import Post from '../components/Post';
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../queries/query';


export default function Home() {
  const navigation = useNavigation();
  const {data, loading, error} = useQuery(GET_POSTS)

  // console.log(data)

  const handleLinkAdd = () => {
    navigation.navigate('Add');
  }
  return (
    <>
      <FlatList
        data={data?.GetPosts}
        renderItem={({ item }) => {
          return <Post post={item} />;
        }}
        keyExtractor={(item, index) => {
          // console.log(item._id.toString())
          return item._id.toString()
        }}
      />
      <TouchableHighlight style={styles.addPost} onPress={handleLinkAdd}>
        <Text><Octicons name="comment-discussion" size={22} color="#FFFFFF" /></Text>
      </TouchableHighlight>
    </>
  );
}

const styles = StyleSheet.create({
  addPost: {
    position: "absolute",
    right: 12,
    bottom: 12,
    padding: 18,
    backgroundColor: "#4C9EEB",
    borderRadius: 50,
  }
});
