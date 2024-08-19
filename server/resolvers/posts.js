const { ObjectId } = require("mongodb");

const posts = [];
const resolvers = {
  Query: {
    posts: () => posts,
  },
  Mutation: {
    async AddPost(_, args, contextValue) {
      const { newPost } = args;
      const { db, authentication } = contextValue;

      console.log(newPost)
      const user = await authentication()
      if(!user) throw new Error("Authentication failed")
        
      console.log(user)

      const dataNewPost = {
        content: newPost.content,
        tags: newPost.tags,
        imgUrl: newPost.imgUrl,
        authorId: new ObjectId(user.id),
        comments: [],
        // comments: newPost.comments,
        likes: [],
        // likes: newPost.likes,
        createdAt: new Date(),
        updatedAt: new Date()
      }

      const data = await db.collection("Posts").insertOne(dataNewPost)

      console.log(data)

      return {...dataNewPost, _id: data.insertedId,}
    },
  },
};

module.exports = resolvers;
