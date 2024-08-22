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
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
// import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function DetailPost({ route }) {
  const { post } = route.params;
  const handleComment = () => {};
  return (
    <>
      <ScrollView style={styles.containerDetail}>
        <View style={styles.post}>
          <View>
            <Text style={styles.authorName}>{post.author.name}</Text>
            <Text style={styles.authorUsername}>@{post.author.username}</Text>
          </View>
          <View style={styles.postTags}>
            {post.tags.map((tag) => {
              return (
                <View style={styles.itemTag}>
                  <Text>{tag}</Text>
                </View>
              );
            })}
          </View>
          <View>
            {true ? (
              <Image source={{ uri: post.imgUrl }} style={styles.postImage} />
            ) : null}
          </View>
          <Text>{post.content}</Text>
          <View style={styles.postCount}>
            <View
              style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}
            >
              <Text style={styles.postItemAction}>
                {false ? (
                  <AntDesign name="heart" size={16} color="#4C9EEB" />
                ) : (
                  <AntDesign name="hearto" size={16} color="#0C0C0C" />
                )}
              </Text>
              <Text style={styles.itemCount}>
                <Text style={styles.count}>{post.likes.length}</Text> Likes
              </Text>
            </View>
            <Text style={styles.itemCount}>
              <Text style={styles.count}>{post.comments.length}</Text> Comments
            </Text>
          </View>

          {/* <View style={styles.postAction}></View> */}
        </View>
        <View style={styles.sectionComments}>
          <Text style={styles.headComment}>Comments: </Text>
          {post.comments.map((comment) => {
            return (
              <View style={styles.listComment}>
                <Text style={styles.commentHeader}>{comment.username}</Text>
                <Text style={styles.commentContent}>{comment.content}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.inputComment}>
        <TextInput
          style={styles.input}
          placeholder="Type comment...."
          // keyboardType=""
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
    </>
  );
}

const styles = StyleSheet.create({
  containerDetail: {
    backgroundColor: '#E7ECF0',
  },
  post: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#DADADA',
  },
  authorName: {
    fontSize: 30,
    lineHeight: 30,
    fontWeight: '700',
  },
  authorUsername: {
    fontSize: 15,
    lineHeight: 20,
    color: '#9D9D9D',
  },
  postTags: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
    marginBottom: 12,
  },
  itemTag: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: '#4C9EEB',
    borderRadius: 20,
  },
  postImage: {
    height: 300,
    width: '100%',
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 20,
  },
  postCount: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 20,
  },
  itemCount: {
    fontWeight: '700',
    color: '#9D9D9D',
    fontSize: 14,
  },
  count: {
    color: '#0C0C0C',
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
  // Comment
  sectionComments: {
    marginBottom: 50,
  },
  headComment: {
    paddingHorizontal: 40,
    paddingTop: 20,
    paddingBottom: 10,
    fontWeight: '700',
    fontSize: 20,
  },
  listComment: {
    paddingHorizontal: 40,
    paddingVertical: 16,
    // backgroundColor: '#FFFFFF',
  },
  commentHeader: {
    fontWeight: '700',
    fontSize: 16,
  },
  commentContent: {
    color: '#9D9D9D',
  },
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
    height: 50
  },
  btnComment: {},
  btnText: {},
});
