const followTypeDefs = `#graphql
  type Follow {
    _id: ID
    followingId: ID
    followerId: ID
    createdAt: String
    updatedAt: String
    user: User
  }

  type Query {
    follows: [Follow]
  }

  type Mutation {
    AddFollow(followingId: ID!): Follow
  }
`;

module.exports = followTypeDefs;
