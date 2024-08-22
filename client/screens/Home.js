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

const DATA = [
  {
    _id: '66c5a07f722ca32ef0aa0d02',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    tags: ['Sport', 'Design', 'lain'],
    imgUrl:
      'https://i.pinimg.com/736x/1f/10/4e/1f104e891adac76c7b28834dbe6be0a6.jpg',
    authorId: '66c3052529e3d3b8cd502e1f',
    comments: [],
    likes: [],
    createdAt: '2024-08-21T08:08:31.599Z',
    updatedAt: '2024-08-21T08:08:31.599Z',
    author: {
      name: 'user 1',
      username: 'user1ganteng',
      email: 'user1@mail.com',
    },
  },
  {
    _id: '66c5a07f722ca32ef0aa0d0',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    tags: ['Sport', 'Design', 'lain'],
    imgUrl:
      'https://i.pinimg.com/736x/1f/10/4e/1f104e891adac76c7b28834dbe6be0a6.jpg',
    authorId: '66c3052529e3d3b8cd502e1f',
    comments: [],
    likes: [],
    createdAt: '2024-08-21T08:08:31.599Z',
    updatedAt: '2024-08-21T08:08:31.599Z',
    author: {
      name: 'user 1',
      username: 'user1ganteng',
      email: 'user1@mail.com',
    },
  },
  {
    _id: '66c5a07f722ca32ef0aa0d',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    tags: ['Sport', 'Design', 'lain'],
    imgUrl:
      'https://i.pinimg.com/736x/1f/10/4e/1f104e891adac76c7b28834dbe6be0a6.jpg',
    authorId: '66c3052529e3d3b8cd502e1f',
    comments: [],
    likes: [],
    createdAt: '2024-08-21T08:08:31.599Z',
    updatedAt: '2024-08-21T08:08:31.599Z',
    author: {
      name: 'user 1',
      username: 'user1ganteng',
      email: 'user1@mail.com',
    },
  },
  {
    _id: '66c5a07f722ca32ef0aa0',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    tags: ['Sport', 'Design', 'lain'],
    imgUrl:
      'https://i.pinimg.com/736x/1f/10/4e/1f104e891adac76c7b28834dbe6be0a6.jpg',
    authorId: '66c3052529e3d3b8cd502e1f',
    comments: [],
    likes: [],
    createdAt: '2024-08-21T08:08:31.599Z',
    updatedAt: '2024-08-21T08:08:31.599Z',
    author: {
      name: 'user 1',
      username: 'user1ganteng',
      email: 'user1@mail.com',
    },
  },
];

export default function Home() {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => {
        return (
          <View style={styles.postContainer}>
            <View style={styles.postTags}>
              {item.tags.map((tag) => {
                return (
                  <View>
                    <Text>{tag}</Text>
                  </View>
                );
              })}
            </View>
            <View style={styles.postAuthor}>
              <Text style={styles.authorName}>{item.author.name}</Text>

              <Text style={styles.authorUsername}>@{item.author.username}</Text>
            </View>
            <Text>{item.content}</Text>
          </View>
        );
      }}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  posts: {},
  postContainer: {
    borderWidth: 0.3,
    borderColor: '#DADADA',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  postTags: {
    flexDirection: "row"
  },
  postAuthor: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  authorName: {
    fontSize: 16,
    fontWeight: '700',
  },
  authorUsername: {
    color: '#9D9D9D',
  },
});
