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
  
  type Post {
    _id: ID
    content: String!
    tags: [String]
    imgUrl: String
    authorId: ID!
    comments: [Comment]
    likes: [Like]
    createdAt: String
    updatedAt: String
  }

  type Query {
    posts: [Post]
  }

  # input newComment {
  #   content: String
  #   username: String
  #   # createdAt: String
  #   # updatedAt: String
  # }
  # input newLike {
  #   username: String
  # }

  input newPost {
    content: String!
    tags: [String]
    imgUrl: String
    # authorId: ID!
    # createdAt: String
    # updatedAt: String
  }

  type Mutation {
    AddPost(newPost: newPost): Post
  }
`;

module.exports = postsTypeDefs;
