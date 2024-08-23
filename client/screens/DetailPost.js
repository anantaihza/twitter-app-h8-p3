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
import { useQuery } from '@apollo/client';
import { GET_POST_ID, GET_POSTS, ADD_COMMENT } from '../queries/query';
import InputComments from '../components/InputComments';
import InputLike from '../components/InputLike';
// import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function DetailPost({ route }) {
  const { post } = route.params;

  const { data, loading, error } = useQuery(GET_POST_ID, {
    variables: {
      postId: post._id,
    },
  });

  // console.log(data);

  if (loading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <>
      <ScrollView style={styles.containerDetail}>
        <View style={styles.post}>
          <View>
            <Text style={styles.authorName}>{data?.post?.author.name}</Text>
            <Text style={styles.authorUsername}>
              @{data?.post?.author.username}
            </Text>
          </View>
          <Text style={styles.contentDetail}>{data?.post?.content}</Text>

          
          <View>
            {data?.post?.imgUrl ? (
              <Image
                source={{ uri: data?.post?.imgUrl }}
                style={styles.postImage}
              />
            ) : null}
          </View>

          <View style={styles.postTags}>
            {data?.post?.tags.map((tag, index) => {
              return (
                <View key={index} style={styles.itemTag}>
                  <Text>{tag}</Text>
                </View>
              );
            })}
          </View>
          <View style={styles.postCount}>
            <InputLike likes={data?.post?.likes} postId={post._id} />
            <Text style={styles.itemCount}>
              <Text style={styles.count}>{data?.post?.comments.length}</Text>{' '}
              Comments
            </Text>
          </View>

          {/* <View style={styles.postAction}></View> */}
        </View>
        <View style={styles.sectionComments}>
          {/* <Text style={styles.headComment}>Comments: </Text> */}
          {data?.post?.comments.map((comment, index) => {
            return (
              <View key={index} style={styles.listComment}>
                <Text style={styles.commentHeader}>{comment.username}</Text>
                <Text style={styles.commentContent}>{comment.content}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <InputComments postId={post._id} />
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
    // marginTop: 10,
    marginBottom: 12,
    flexWrap: 'wrap',

  },
  contentDetail: {
    marginTop: 20,
    marginBottom: 10
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
});
