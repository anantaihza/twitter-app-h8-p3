const followTypeDefs = `#graphql
  type Follow {
    _id: ID
    followingId: ID
    followerId: ID
    createdAt: String
    updatedAt: String
  }

  type Query {
    follows: [Follow]
  }

  input newFollow {
    followingId: ID!
    # followerId: ID!
  }

  type Mutation {
    AddFollow(newFollow: newFollow): Follow
  }
`;

module.exports = followTypeDefs;
