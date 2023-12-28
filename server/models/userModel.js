const knex = require('knex')(require('./../knexfile'));

const getUsers = async (req,res) => {
  try {
    const users = await knex('users').select('*');
    return users;
  } catch (err) {
    throw new Error(`Error retrieving users: ${err}`);
  }
};

const loginUsers = async (req,res) => {
  try {
    const { email, password } = req.body;
    const user = await knex('users').where({ email }).first();
    if(user && user.password === password) {
      return user;
    }else {
      res.sendStatus(401);
    }
  } catch (err) {
    res.status(400).send(`Error (LoginUserModel): ${err}`);
  }
}

const createUsers = async (req,res) => {
  try {
    const { username, email, password, role } = req.body;
    const user = await knex('users').insert({ username, email, password, role }).returning('*');
    return user;
  } catch (err) {
    throw new Error(`Error creating user: ${err}`);
  }
}

module.exports = {
  getUsers,
  loginUsers,
  createUsers,
};