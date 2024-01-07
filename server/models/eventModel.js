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

const createAttendee = async (req, res) => {
  try {
    const { user_id, email, username } = req.body;
    const eventId = req.params.eventId;
    const event = await knex('events').where('id', eventId).first();

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    const currentAttendees = event.eventAttendees || [];
    currentAttendees.push({ user_id, email, username });
    console.log(currentAttendees);
    
    const updatedAttendees = JSON.stringify(currentAttendees);
    
    await knex('events').where('id', eventId).update({ eventAttendees: updatedAttendees });

    res.status(200).json({ message: 'Attendee added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding attendee' });
  }
};


module.exports = {
  getEvents,
  getEventsById,
  createAttendee
};
