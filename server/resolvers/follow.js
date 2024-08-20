const { ObjectId } = require('mongodb');

const follows = [
  {
    _id: '1',
    followingId: '1',
    followersId: '2',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: '2',
    followingId: '2',
    followersId: '1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const resolvers = {
  Query: {
    follows: () => follows,
  },
  Mutation: {
    async AddFollow(_, args, contextValue) {
      const { newFollow } = args;
      const { db, authentication } = contextValue;

      const user = await authentication();
      if (!user) throw new Error('Authentication failed');

      console.log(user);

      // 66c31bb47c8fa33dcb8a3b3d
      const dataFollow = {
        followingId: new ObjectId(newFollow.followingId),
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
