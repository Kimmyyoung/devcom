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
    console.log(req.body);

    const { email, password } = req.body;
    const user = await userModel.loginUsers(req, res);
    
    if(user && user.password === password) {
      let token = jwt.sign({ email }, SECRET_KEY);
      res.json({ token });
    }else{
      res.status(401).send("Invalid credentials");
    }
    return user;
  }catch(err){
    res.status(400).send(`Error (LoginUserModel): ${err}`);
  }
};

const createUsersController = async (req, res) => {
  try {
    const user = await userModel.createUsers(req, res);
    
    if(res.statusCode === 401) {
      res.status(401).send('Existed User');
      return;
    }

    res.status(200).json(user);
    
  } catch (err) {
    res.status(400).send(`Error (createUserController): ${err}`);
  }
};

const profileUser = async (req, res) => {
  try{
    await userModel.profileUser(req, res);
  }catch(err){
    res.status(401).send('Invalid token');
  }
}


module.exports = {
  getUsersController,
  loginUsersController,
  createUsersController,
  profileUser
};