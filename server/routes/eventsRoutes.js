const express = require("express");
const router = express.Router();
const eventsController = require("../controllers/eventsController");

router.route("/").get(eventsController.getEventsContoller);
router.route("/:id").get(eventsController.getEventsByIdController);
router.route("/:eventId/attendees").post(eventsController.createAttendeeController);

module.exports = router;