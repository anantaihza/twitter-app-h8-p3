import { gql } from '@apollo/client';

export const REGISTER = gql`
  mutation Register($newUser: newUser) {
    Register(newUser: $newUser) {
      name
      username
      email
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    Login(email: $email, password: $password) {
      access_token
    }
  }
`;

export const GET_POSTS = gql`
  query Posts {
    GetPosts {
      _id
      content
      tags
      imgUrl
      authorId
      comments {
        content
        username
        createdAt
        updatedAt
      }
      likes {
        username
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      author {
        name
        username
        email
      }
    }
  }
`;

export const GET_POST_ID = gql`
  query Post($postId: ID!) {
    post(postId: $postId) {
      _id
      content
      tags
      imgUrl
      authorId
      author {
        name
        username
        email
      }
      comments {
        content
        username
        createdAt
        updatedAt
      }
      likes {
        username
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation AddComment($content: String!, $postId: ID!) {
    CommentPost(content: $content, postId: $postId) {
      content
      username
      createdAt
      updatedAt
    }
  }
`;

export const ADD_LIKE = gql`
  mutation AddLike($postId: ID!) {
    LikePost(postId: $postId) {
      username
      createdAt
      updatedAt
    }
  }
`;

export const SEARCH = gql`
  query UserSearch($search: String!) {
    SearchUser(search: $search) {
      _id
      name
      username
      email
    }
  }
`;

export const ADD_POST = gql`
  mutation Mutation($newPost: newPost) {
    AddPost(newPost: $newPost) {
      _id
      content
      tags
      imgUrl
      createdAt
      updatedAt
      authorId
      comments {
        content
        username
        createdAt
        updatedAt
      }
      likes {
        username
        createdAt
        updatedAt
      }
    }
  }
`;

export const GET_USER_ID = gql`
  query User($userId: ID!) {
    GetUser(userId: $userId) {
      _id
      name
      username
      email
      followers {
        _id
        name
        username
        email
      }
      followings {
        _id
        name
        username
        email
      }
    }
  }
`;

export const ADD_FOLLOW = gql`
  mutation AddFollow($followingId: ID!) {
    Follow(followingId: $followingId) {
      _id
      followingId
      followerId
      createdAt
      updatedAt
    }
  }
`;
