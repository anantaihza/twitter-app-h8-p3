// const { GraphQLError } = require('graphql');


const users = [
  {
    _id: "1",
    name: "User 1",
    username: "user1",
    email: "user1@mail.com",
    password: "1234"
  },
  {
    _id: "2",
    name: "User 2",
    username: "user2",
    email: "user2@mail.com",
    password: "1234"
  },
  {
    _id: "3",
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
