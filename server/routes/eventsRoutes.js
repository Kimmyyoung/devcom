const express = require("express");
const router = express.Router();
const eventsController = require("../controllers/eventsController");

router.route("/").get(eventsController.getEventsContoller);

module.exports = router;