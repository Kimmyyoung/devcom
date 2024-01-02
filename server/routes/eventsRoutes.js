const express = require("express");
const router = express.Router();
const eventsController = require("../controllers/eventsController");

router.route("/").get(eventsController.getEventsContoller);
router.route("/:id").get(eventsController.getEventsByIdController);

module.exports = router;