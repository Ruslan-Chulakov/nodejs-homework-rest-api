const express = require("express");
const { validateBody, authenticate, upload } = require("../../middlewares");
const { chemas } = require("../../models/user");
const { ctrlWrapper } = require("../../helpers");

const ctrl = require("../../controllers/users");

const router = express.Router();

router.post(
  "/register",
  validateBody(chemas.registerSchema),
  ctrlWrapper(ctrl.register)
);

router.get('/verify/:verificationCode', ctrlWrapper(ctrl.verifyEmail));

router.post("./verify", validateBody(chemas.emailSchema), ctrlWrapper(ctrl.resendVerifyEmail));

router.post("/login", validateBody(chemas.loginSchema), ctrlWrapper(ctrl.login));

router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));

router.post("/logout", authenticate, ctrlWrapper(ctrl.logout));

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);

module.exports = router;
