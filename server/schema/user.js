const userTypeDefs = `#graphql
  type User {
    _id: ID
    name: String
    username: String
    email: String
  }

  type UserById {
    _id: ID
    name: String
    username: String!
    email: String!
    followers: [User]
    followings: [User]
  }

  type accessToken {
    access_token: String!
  }

  # The "Query" type is special: it lists all of the available queries 
  type Query {
    GetUser(userId: ID!): UserById
    SearchUser(search: String!): [User]
  }

  input newUser {
    name: String
    username: String!
    email: String!
    password: String!
  }

  type Mutation {
    Register(newUser: newUser): User
    Login(email: String!, password: String!): accessToken
  }
`;

module.exports = userTypeDefs;
