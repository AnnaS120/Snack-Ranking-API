const { Router } = require('express');

const snackController = require('../controllers/snacks');

const snackRouter = Router();

snackRouter.get("/", snackController.index);
snackRouter.get("/:id", snackController.show);
snackRouter.get("/top", snackController.getTop);
snackRouter.post("/", snackController.create);
snackRouter.patch("/:id", snackController.update);
snackRouter.delete("/:id", snackController.destroy);

module.exports = snackRouter;
