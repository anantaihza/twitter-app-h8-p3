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

const DATA = [
  {
    _id: '66c5a07f722ca32ef0aa0d02',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    tags: ['Sport', 'Design', 'lain'],
    imgUrl:
      'https://akcdn.detik.net.id/visual/2019/10/01/2712f2e3-7f33-4322-b4f3-5ceda31fedca_43.png?w=720&q=90',
    authorId: '66c3052529e3d3b8cd502e1f',
    comments: [
      {
        content: 'Test coba',
        username: 'user1',
        createdAt: '2024-08-20T03:13:56.033Z',
        updatedAt: '2024-08-20T03:13:56.033Z',
      },
      {
        content: 'Test aja',
        username: 'user2',
        createdAt: '2024-08-20T03:13:56.033Z',
        updatedAt: '2024-08-20T03:13:56.033Z',
      },
    ],
    likes: [
      {
        username: 'user1',
        createdAt: '2024-08-20T03:15:28.853Z',
        updatedAt: '2024-08-20T03:15:28.853Z',
      },
    ],
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
        return <Post key={item._id} post={item} />;
      }}
      keyExtractor={(item) => item._id}
    />
  );
}

const styles = StyleSheet.create({});
