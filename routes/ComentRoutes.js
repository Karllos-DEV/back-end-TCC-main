const router = require("express").Router();

const ComentController = require("../controller/ComentController");

router.get("/", ComentController.read);

router.post("/", ComentController.create);

router.get("/:id", ComentController.readById);

router.get("/coment/:postId", ComentController.readById);

router.delete("/:id", ComentController.del);

module.exports = router;
