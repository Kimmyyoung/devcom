const userModel = require("../models/userModel");
const knex = require('knex')(require('../knexfile'));
const SECRET_KEY = process.env.SECRET_KEY;
const jwt = require("jsonwebtoken");
const authorize = require("../middleware/authorization");

const getUsersController = async (req,res) => {
try {
  const users = await userModel.getUsers();
  res.status(200).json(users);
} catch (err) {
  res.status(400).send(`Error (getUesrsController): ${err}`);
}
}

const loginUsersController = async (req,res) => {
  try {
    const { username, password } = req.body;
    const user = await userModel.loginUsers(req, res);
    if(user && user.password === password) {
      let token = jwt.sign({ username }, SECRET_KEY);
      res.json({ token });
    }else{
      res.status(401).send("Unauthorized");
    }
    
  }catch(error){
    res.status(400).send(`Error (LoginUserModel): ${err}`);
  }
};

const createUsersController = async (req, res) => {
  try {
    const user = await userModel.createUsers(req, res);
    res.status(201).json(user);
  } catch (err) {
    if (err.code === '23505') {
      res.status(409).send(`Error (createUsersController): User with the same username or email already exists.`);
    } else {
      console.error(err); 
      res.status(400).send(`Error (createUsersController): ${err.message}`);
    }
  }
};


module.exports = {
  getUsersController,
  loginUsersController,
  createUsersController
};