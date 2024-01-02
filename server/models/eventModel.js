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


const getEventsById = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await knex('events').select('*').where({ id });
    return event;
  } catch (err) {
    throw new Error(`Error in getEventsById: ${err.message}`);
  }
}


module.exports = {
  getEvents,
  getEventsById
};
