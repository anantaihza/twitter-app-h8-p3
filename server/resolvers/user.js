// const { GraphQLError } = require('graphql');


const users = [
  {
    name: "User 1",
    username: "user1",
    email: "user1@mail.com",
    password: "1234"
  },
  {
    name: "User 2",
    username: "user2",
    email: "user2@mail.com",
    password: "1234"
  },
  {
    name: "User 3",
    username: "user3",
    email: "user3@mail.com",
    password: "1234"
  },
]

const resolvers = {
  Query: {
    users: () => users
  },
};

module.exports = resolvers;
