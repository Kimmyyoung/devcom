const express = require("express");
const router = express.Router();
const authorize = require("../middleware/authorization");

const userController = require("../controllers/userController");

router.route("/").get(userController.getUsersController);
router.route("/login").post(userController.loginUsersController);
router.route("/signup").post(userController.createUsersController);
router.route('/profile').get(userController.profileUser);

module.exports = router;
