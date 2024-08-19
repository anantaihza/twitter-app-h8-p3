const { MongoClient } = require('mongodb');

const uri = process.env.DATABASE_URI;

const client = new MongoClient(uri);

async function connect() {
  try {
    client.db('h8-p3-c1-twitter');
  } catch (error) {
    console.log(error, '<--- Error Connection');
    await client.close();
  }
}

async function getDB() {
  return client.db('h8-p3-c1-twitter');
}

module.exports = { connect, getDB };
