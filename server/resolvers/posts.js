const { ObjectId } = require('mongodb');

// const posts = [];
const resolvers = {
  Query: {
    posts: async (_, args, contextValue) => {
      const { db } = contextValue;

      // ! haruskah di authentication
      // const posts = await db.collection('Posts').find().toArray();
      const posts = await db.collection('Posts').aggregate([
        {
          $lookup: {
            from: "Users",
            localField: "authorId",
            foreignField: "_id",
            as: "author_profile"
          }
        }
      ]).toArray();

      // ! Gimana cara nampilnya??
      console.log(posts[0].author_profile)

      return posts;
    },
  },
  Mutation: {
    async AddPost(_, args, contextValue) {
      const { newPost } = args;
      const { db, authentication } = contextValue;

      // console.log(newPost);
      const user = await authentication();
      if (!user) throw new Error('Authentication failed');

      console.log(user);

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

      // console.log(data)

      return { ...dataNewPost, _id: data.insertedId };
    },
    async AddComment(_, args, contextValue) {
      const { newComment } = args;
      const { db, authentication } = contextValue;

      const user = await authentication();
      if (!user) throw new Error('Authentication failed');

      console.log(user);

      const dataComment = {
        content: newComment.content,
        username: user.username,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      // ! Id Static
      const idPost = '66c33992ba34546707e27e02';

      await db
        .collection('Posts')
        .updateOne(
          { _id: new ObjectId(idPost) },
          { $push: { comments: dataComment } }
        );

      // console.log(data);

      return {
        ...dataComment,
      };
    },
    async AddLike(_, args, contextValue) {
      // const { newLike } = args;
      const { db, authentication } = contextValue;

      const user = await authentication();
      if (!user) throw new Error('Authentication failed');

      console.log(user);

      const dataLike = {
        username: user.username,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      // ! Id Static
      const idPost = '66c33992ba34546707e27e02';

      await db
        .collection('Posts')
        .updateOne(
          { _id: new ObjectId(idPost) },
          { $push: { likes: dataLike } }
        );

      return {
        ...dataLike,
      };
    },
  },
};

module.exports = resolvers;
