const { ObjectId } = require('mongodb');
const { verifyToken } = require('../helpers/jwt');

async function authentication(req, db) {
  const access_token = req.headers.authorization;
  if (!access_token) throw new Error('Invalid token');

  const [type, token] = access_token.split(' ');
  if (type !== 'Bearer') throw new Error('Invalid token');

  const payload = verifyToken(token);

  // console.log(payload)

  const user = await db.collection('Users').findOne({
    _id: new ObjectId(payload.id),
  });

  // console.log(user)

  if (!user) throw new Error('Invalid token');

  const data = {
    id: user._id,
    username: user.username
  };

  // console.log(data)

  return data;
}

module.exports = authentication;
