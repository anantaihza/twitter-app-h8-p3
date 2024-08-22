const { GraphQLError } = require('graphql');
const { hashPassword, comparePassword } = require('../helpers/bcrypt');
const { signToken } = require('../helpers/jwt');
const { ObjectId } = require('mongodb');

const resolvers = {
  Query: {
    GetUser: async (_, args, contextValue) => {
      const { userId } = args;
      const { db, authentication } = contextValue;

      const user = await authentication();

      const agg = [
        {
          $match: {
            _id: new ObjectId(userId),
          },
        },
        {
          $lookup: {
            from: 'Follows',
            localField: '_id',
            foreignField: 'followingId',
            as: 'followers',
          },
        },
        {
          $lookup: {
            from: 'Users',
            localField: 'followers.followerId',
            foreignField: '_id',
            as: 'followers',
          },
        },
        {
          $lookup: {
            from: 'Follows',
            localField: '_id',
            foreignField: 'followerId',
            as: 'followings',
          },
        },
        {
          $lookup: {
            from: 'Users',
            localField: 'followings.followingId',
            foreignField: '_id',
            as: 'followings',
          },
        },
        {
          $project: {
            password: 0,
            'followers.password': 0,
            'followings.password': 0,
          },
        },
      ];
      const userData = await db.collection('Users').aggregate(agg).toArray();
      // console.log(userData);

      return userData[0];
    },
    SearchUser: async (_, args, contextValue) => {
      const { search } = args;
      const { db, authentication } = contextValue;

      const user = await authentication();

      const dataUsers = await db
        .collection('Users')
        .find({
          username: {
            $regex: search, $options: "i"
          },
        })
        .toArray();

      // console.log(dataUsers);

      return dataUsers;
    },
  },
  Mutation: {
    async Register(_, args, contextValue) {
      // console.log(args);
      const { newUser } = args;
      const { db } = contextValue;

      const validateEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      if (!validateEmail.test(newUser.email))
        throw new Error('Email is wrong format');

      const find = await db.collection('Users').findOne({
        $or: [{ email: newUser.email }, { username: newUser.username }],
      });

      // console.log(find, '<- find');

      if (!find) {
        await db.collection('Users').insertOne({
          name: newUser.name,
          username: newUser.username,
          email: newUser.email,
          password: hashPassword(newUser.password),
        });
      } else {
        throw new Error('Email already used');
      }

      return {
        name: newUser.name,
        username: newUser.username,
        email: newUser.email,
      };
    },

    async Login(_, args, contextValue) {
      const { email, password } = args;
      const { db } = contextValue;

      if (!email || !password) throw new Error('Email / Password is required');

      const user = await db.collection('Users').findOne({
        email: email,
      });

      if (!user)
        throw new GraphQLError('Email not found', {
          extensions: {
            code: 'BAD_USER_INPUT',
          },
        });

      const verifyPass = comparePassword(password, user.password);
      if (!verifyPass)
        throw new GraphQLError('Incorrect password', {
          extensions: {
            code: 'BAD_USER_INPUT',
          },
        });

      const access_token = signToken({ id: user._id });

      // console.log(user);
      return {
        access_token,
      };
    },
  },
};

module.exports = resolvers;
