const userTypeDefs = `#graphql
  type User {
    name: String
    username: String!
    email: String!
    password: String!
  }

  # The "Query" type is special: it lists all of the available queries 
  type Query {
    users: [User]
  }
`;

module.exports = userTypeDefs;
