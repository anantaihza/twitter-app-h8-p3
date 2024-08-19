const { ApolloServer }  = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');

const userTypeDefs = require("./schema/user")
const userResolvers = require("./resolvers/user")


const server = new ApolloServer({
  typeDefs: [userTypeDefs],
  resolvers: [userResolvers],
});

startStandaloneServer(server, {
  listen: { port: 4000 },
})
  .then(({ url }) => {
    console.log(`🚀  Server ready at: ${url}`);
  })
  .catch((err) => {
    console.log(err);
  });
