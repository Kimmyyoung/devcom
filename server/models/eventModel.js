const knex = require('knex')(require('../knexfile'));
const SECRET_KEY = process.env.SECRET_KEY;
const jwt = require("jsonwebtoken");

const getEvents = async(req,res) => {
  try {
    const events = await knex('events').select('*');
    return events;
  }catch(err) {
    console.error('Error in getEvents:', err);
  }
};


module.exports = {
  getEvents,
};
