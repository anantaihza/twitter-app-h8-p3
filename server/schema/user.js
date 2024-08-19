const userTypeDefs = `#graphql
  type User {
    _id: ID
    name: String
    username: String!
    email: String!
  }

  type UserLogin {
    access_token: String!
  }

  # The "Query" type is special: it lists all of the available queries 
  type Query {
    users: [User]
  }

  input newUser {
    name: String
    username: String!
    email: String!
    password: String!
  }

  input loginUser {
    email: String!
    password: String!
  }

  type Mutation {
    Register(newUser: newUser): User
    Login(loginUser: loginUser): UserLogin
  }
`;

module.exports = userTypeDefs;
