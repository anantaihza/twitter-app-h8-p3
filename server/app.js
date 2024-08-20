if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');

const { connect, getDB } = require('./config/mongoConnect');

const userTypeDefs = require('./schema/user');
const userResolvers = require('./resolvers/user');

const followTypeDefs = require('./schema/follow');
const followResolvers = require('./resolvers/follow');

const postsTypeDefs = require('./schema/posts');
const postsResolvers = require('./resolvers/posts');
const authentication = require('./middlewares/authentication');

const server = new ApolloServer({
  typeDefs: [userTypeDefs, followTypeDefs, postsTypeDefs],
  resolvers: [userResolvers, followResolvers, postsResolvers],
});

(async () => {
  try {
    await connect();

    const db = await getDB();

    const { url } = await startStandaloneServer(server, {
      listen: { port: process.env.PORT || 4000 },
      context: ({ req, res }) => {
        return {
          db,
          authentication: async () => await authentication(req, db)
        };
      },
    });

    console.log(`Running on ${url}`);
  } catch (error) {
    console.log(error, '<--- Error app');
  }
})();


// ? Contoh menggunakan then
// startStandaloneServer(server, {
//   listen: { port: 4000 },
//   // context: ({ req, res }) => {
//   //   return {

//   //   };
//   // },
// })
//   .then(({ url }) => {
//     console.log(`🚀  Server ready at: ${url}`);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
