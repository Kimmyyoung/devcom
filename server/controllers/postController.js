const postModel = require("../models/postModel");
const knex = require('knex')(require('../knexfile'));
const SECRET_KEY = process.env.SECRET_KEY;

const getPostsController = async (req,res) => {
  try {
    const posts = await postModel.getPost();
    res.status(200).json(posts);
  }catch(err) {
    console.error('Error in getPosts:', err);
  }
}

const getPostByIdController = async (req,res) => {
  try {
    const post = await postModel.getPostById(req);
    res.status(200).json(post);
  }catch(err) {
    console.error('Error in getPostById:', err);
  }
}

const getAuthorByIdController = async (req,res) => {
  try{
    const author = await postModel.getAuthorById(req);
    res.status(200).json(author);
  }catch(err) {
    console.error('Error in getAuthorById:', err);
  }
}

const createPostController = async (req,res) => {
  try {        
    const post = await postModel.createPost(req, res);
    res.status(200).json(post);
  }catch(err) {
    console.error('Error in createPost:', err);
  }
};



module.exports = {
  getPostsController,
  getPostByIdController,
  getAuthorByIdController,
  createPostController
}