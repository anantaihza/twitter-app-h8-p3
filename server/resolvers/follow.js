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
    follows: () => follows
  },
};

module.exports = resolvers;
