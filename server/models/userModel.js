const knex = require('knex')(require('../knexfile'));
const SECRET_KEY = process.env.SECRET_KEY;
const jwt = require("jsonwebtoken");

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
    // if(user && user.password === password) {
    //   return user;
    // }else {
    //   res.sendStatus(401);
    // }
    return user;
  } catch (err) {
    res.status(400).send(`Error (LoginUserModel): ${err}`);
  }
}

const createUsers = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const existedUser = await knex('users').where({ email }).first();

    if (existedUser) {
      res.status(401).send('Existed User');
      return;
    }

    const user = await knex('users').insert({ username, email, password, role }).returning('*');
    
    return user;
  } catch (err) {
    throw new Error(`Error creating user: ${err.message}`);
  }
};

const profileUser = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if(token === undefined || token === null || token === '') {
      return;
    }
    
    const decoded = jwt.verify(token, SECRET_KEY);
    const user = await knex('users').where({ email: decoded.email }).first();

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    console.error('Error in profileUser:', err);
    res.status(401).json({ error: 'Invalid token' });
    return;
  }
};

module.exports = {
  getUsers,
  loginUsers,
  createUsers,
  profileUser
};