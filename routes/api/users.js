const express = require("express");
const { validateBody, authenticate } = require("../../middlewares");
const { chemas } = require("../../models/user");
const { ctrlWrapper } = require("../../helpers");

const ctrl = require("../../controllers/users");

const router = express.Router();

router.post(
  "/register",
  validateBody(chemas.registerSchema),
  ctrlWrapper(ctrl.register)
);

router.post("/login", validateBody(chemas.loginSchema), ctrlWrapper(ctrl.login));

router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));

router.post("/logout", authenticate, ctrlWrapper(ctrl.logout));

module.exports = router;
