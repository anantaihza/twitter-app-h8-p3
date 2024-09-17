const { ObjectId } = require('mongodb');
// const redis = require('../config/redisConfig');

// const posts = [];
const resolvers = {
  Query: {
    GetPosts: async (_, args, contextValue) => {
      const { db, authentication } = contextValue;

      const user = await authentication();
      // if (!user) throw new Error('Authentication failed');

      // console.log(user)

      // const postsCache = await redis.get('post:all');
      // if (postsCache) {
      //   return JSON.parse(postsCache);
      // }

      const agg = [
        {
          $sort: {
            createdAt: -1,
          },
        },
        {
          $lookup: {
            from: 'Users',
            localField: 'authorId',
            foreignField: '_id',
            as: 'author',
          },
        },
        {
          $unwind: {
            path: '$author',
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $project: {
            'author.password': 0,
            'author._id': 0,
          },
        },
      ];

      const posts = await db.collection('Posts').aggregate(agg).toArray();
      // await redis.set('post:all', JSON.stringify(posts));

      return posts;
    },
    post: async (_, args, contextValue) => {
      const { postId } = args;
      const { db, authentication } = contextValue;

      const user = await authentication();

      const agg = [
        {
          $match: {
            _id: new ObjectId(postId),
          },
        },
        {
          $lookup: {
            from: 'Users',
            localField: 'authorId',
            foreignField: '_id',
            as: 'author',
          },
        },
        {
          $unwind: {
            path: '$author',
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $project: {
            'author.password': 0,
            'author._id': 0,
          },
        },
      ];

      const post = await db.collection('Posts').aggregate(agg).toArray();
      // console.log(post)

      return post[0];
    },
  },
  Mutation: {
    async AddPost(_, args, contextValue) {
      const { newPost } = args;
      const { db, authentication } = contextValue;

      // console.log(newPost);
      const user = await authentication();
      // if (!user) throw new Error('Authentication failed');

      // console.log(user);

      const dataNewPost = {
        content: newPost.content,
        tags: newPost.tags,
        imgUrl: newPost.imgUrl,
        authorId: new ObjectId(user.id),
        comments: [],
        likes: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const data = await db.collection('Posts').insertOne(dataNewPost);
      // await redis.del('post:all');

      // console.log(data)

      return { ...dataNewPost, _id: data.insertedId };
    },
    async CommentPost(_, args, contextValue) {
      const { postId, content } = args;
      const { db, authentication } = contextValue;

      const user = await authentication();
      // if (!user) throw new Error('Authentication failed');

      // console.log(user);

      const dataComment = {
        content: content,
        username: user.username,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      await db
        .collection('Posts')
        .updateOne(
          { _id: new ObjectId(postId) },
          { $push: { comments: dataComment } }
        );

      // await redis.del('post:all');

      // console.log(data);

      return dataComment;
    },
    async LikePost(_, args, contextValue) {
      const { postId } = args;
      const { db, authentication } = contextValue;

      const user = await authentication();
      // if (!user) throw new Error('Authentication failed');

      // console.log(user);

      const dataLike = {
        username: user.username,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      
      const post = await db.collection("Posts").findOne({
        _id: new ObjectId(postId)
      })

      post.likes.forEach(el => {
        if (el.username === user.username) {
          throw new Error("You cannot like this post twice")
        }
      });


      await db
        .collection('Posts')
        .updateOne(
          { _id: new ObjectId(postId) },
          { $push: { likes: dataLike } }
        );

      // await redis.del('post:all');

      return dataLike;
    },
  },
};

module.exports = resolvers;
