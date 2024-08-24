import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function Post({ post }) {
  const navigation = useNavigation();
  const handleDetail = () =>
    navigation.navigate('Detail', {
      post,
    });

  return (
    <TouchableHighlight
      onPress={handleDetail}
      underlayColor="#4C9EEB"
      activeOpacity={0.95}
    >
      <View style={styles.postContainer}>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Image
            style={{ width: 40, height: 40 }}
            source={{
              uri: 'https://static.thenounproject.com/png/363639-200.png',
            }}
          />
          <View style={{flex: 1 }}>
            <View style={styles.postAuthor}>
              <Text style={styles.authorName}>{post?.author.name}</Text>
              <Text style={styles.authorUsername}>
                @{post?.author.username}
              </Text>
            </View>

            <Text style={styles.postContent}>{post?.content}</Text>

            <View style={styles.postTags}>
              {post?.tags.map((tag, index) => {
                return (
                  <View key={index} style={styles.itemTag}>
                    <Text>{tag}</Text>
                  </View>
                );
              })}
            </View>
            <View>
              {post?.imgUrl ? (
                <Image
                  source={{ uri: post?.imgUrl }}
                  style={styles.postImage}
                />
              ) : null}
            </View>
            <View style={styles.postAction}>
              <Text style={styles.postItemAction}>
                {false ? (
                  <AntDesign name="heart" size={16} color="#4C9EEB" />
                ) : (
                  <AntDesign name="hearto" size={16} color="#0C0C0C" />
                )}{' '}
                {post?.likes.length}
              </Text>
              <Text style={styles.postItemAction}>
                <FontAwesome name="comment-o" size={17} color="#0C0C0C" />{' '}
                {post?.comments.length}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    borderWidth: 0.3,
    borderColor: '#DADADA',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  postTags: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 14,
    flexWrap: 'wrap',
  },
  itemTag: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: '#4C9EEB',
    borderRadius: 20,
  },
  postAuthor: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 6,
    alignItems: 'center',
  },
  postContent: {
    marginTop: 6,
  },
  authorName: {
    fontSize: 20,
    fontWeight: '700',
  },
  authorUsername: {
    fontSize: 14,
    color: '#9D9D9D',
  },
  postImage: {
    height: 300,
    width: '100%',
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 20,
  },
  postAction: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  postItemAction: {
    color: '#0C0C0C',
    fontSize: 16,
  },
});
