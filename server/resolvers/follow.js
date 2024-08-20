const { ObjectId } = require('mongodb');

const resolvers = {
  Query: {},
  Mutation: {
    async AddFollow(_, args, contextValue) {
      const { followingId } = args;
      const { db, authentication } = contextValue;

      const user = await authentication();
      if (!user) throw new Error('Authentication failed');

      console.log(user);

      console.log(user.id);
      console.log();

      if (followingId === user.id.toString())
        throw new Error('You cant follow yourself');

      const findFollow = await db.collection('Follows').findOne({
        $and: [
          { followingId: new ObjectId(followingId) },
          { followerId: new ObjectId(user.id) },
        ],
      });

      if (findFollow) throw new Error('You already follow');

      // 66c31bb47c8fa33dcb8a3b3d
      const dataFollow = {
        followingId: new ObjectId(followingId),
        followerId: new ObjectId(user.id),
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const data = await db.collection('Follows').insertOne(dataFollow);

      return { ...dataFollow, _id: data.insertedId };
    },
  },
};

module.exports = resolvers;
