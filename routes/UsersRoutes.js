const router = require("express").Router();

const UsersController = require("../controller/UsersController");

router.post("/", UsersController.create);

router.post("/login", UsersController.login);

router.get("/", UsersController.read);

module.exports = router;