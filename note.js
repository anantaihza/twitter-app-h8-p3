module.exports = {
  apps: [
      {
          name: "twitter-clone",
          script: "./app.js",
          env: {
              NODE_ENV: "production",
              PORT: 80,
              DATABASE_URI:"mongodb+srv://anantaihzar:octa79fej6mqnZjs@cluster0.2ojay.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
              SECRET: "secret",           
              REDIS_URI: "redis://default:hgBoHAaQTq5kCQqiqEB9qWQ1EhqFM8PK@redis-19766.c252.ap-southeast-1-1.ec2.redns.redis-cloud.com:19766",
          },
      },
  ],
};