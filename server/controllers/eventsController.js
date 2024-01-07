const eventModel = require("../models/eventModel");
const knex = require('knex')(require('../knexfile'));
const SECRET_KEY = process.env.SECRET_KEY;

const getEventsContoller = async (req,res) => { 
  try {
    const events = await eventModel.getEvents();
    res.status(200).json(events);
  }catch(err) {
    console.error('Error in getEvents:', err);
  }
}

const getEventsByIdController = async (req, res) => {
  try {
    const event = await eventModel.getEventsById(req);
    res.status(200).json(event);
  }catch(err){
    console.error('Error in getEventsById:', err);
  }
}

const createAttendeeController = async (req, res) => {
  try{
    const attendee = await eventModel.createAttendee(req, res);
    res.status(200).json(attendee);
  }catch(err){
    console.error(err)
  }
}

module.exports = {
  getEventsContoller,
  getEventsByIdController,
  createAttendeeController
}