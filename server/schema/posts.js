const postsTypeDefs = `#graphql
  type Comment {
    content: String!
    username: String!
    createdAt: String
    updatedAt: String
  }

  type Like {
    username: String!
    createdAt: String
    updatedAt: String
  }

  type Author {
    name: String!
    username: String!
    email: String!
  }
  
  type Post {
    _id: ID
    content: String!
    tags: [String]
    imgUrl: String
    authorId: ID!
    author: Author
    comments: [Comment]
    likes: [Like]
    createdAt: String
    updatedAt: String
  }

  type Query {
    GetPosts: [Post]
    post(postId: ID!): Post
  }

  input newPost {
    content: String!
    tags: [String]
    imgUrl: String
  }

  type Mutation {
    AddPost(newPost: newPost): Post
    CommentPost(postId: ID!, content: String!): Comment
    LikePost(postId: ID!): Like
  }
`;

module.exports = postsTypeDefs;
