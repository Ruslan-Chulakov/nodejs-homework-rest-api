const express = require("express");

const controllers = require("../../controllers");
const { HttpError, ctrlWrapper } = require("../../helpers");
const { isValidId, authenticate } = require("../../middlewares");

const router = express.Router();

router.get("/", authenticate, ctrlWrapper(controllers.getAll));

router.get(
  "/:contactId",
  authenticate,
  isValidId,
  ctrlWrapper(controllers.getById)
);

router.post("/", authenticate, ctrlWrapper(controllers.add));

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  ctrlWrapper(controllers.updateBuId)
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  ctrlWrapper(controllers.updateFavorite)
);

router.delete(
  "/:contactId",
  authenticate,
  isValidId,
  ctrlWrapper(controllers.deleteById)
);

module.exports = router;