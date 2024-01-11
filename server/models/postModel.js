const knex = require('knex')(require('../knexfile'));
const SECRET_KEY = process.env.SECRET_KEY;
const jwt = require("jsonwebtoken");

const getPost = async(req,res) => {
  try {
    const posts = await knex('posts').select('*');
    return posts;
  }catch(err) {
    console.error('Error in getPosts:', err);
  }
}

const getPostById = async (req, res) => { 
  try {
    const { id } = req.params;
    const post = await knex('posts').select('*').where({ id });
    return post;
  } catch (err) {
    throw new Error(`Error in getPostById: ${err.message}`);
  }
}

const getAuthorById = async (req, res) => {
  try {
    const { id } = req.params;
    const author = await knex('posts')
    .select('posts.*', 'users.username')
    .where({ 'posts.id': id })
    .join('users', { 'posts.user_id': 'users.id' });
    return author;
  } catch (err) {
    throw new Error(`Error in getAuthorById: ${err.message}`);
  }
}

const createPost = async (req, res) => {
  try {
    const { title, image, content, user_id } = req.body;
    const post = await knex('posts').insert({ title, image, content, user_id }).returning('*');
    
    return post;
  } catch (err) {
    throw new Error(`Error creating post: ${err.message}`);
  }
};



module.exports = {  
  getPost,
  getPostById,
  createPost,
  getAuthorById
};