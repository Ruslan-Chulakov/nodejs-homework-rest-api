const express = require("express");
const { validateBody, authenticate } = require("../../middlewares");
const { chemas } = require("../../models/user");

const ctrl = require("../../controllers/auth");

const router = express.Router();

router.post("/register", validateBody(chemas.registerSchema), ctrl.register);

router.post("/login", validateBody(chemas.loginSchema), ctrl.login);

router.get('/current', authenticate, ctrl.getCurrent);

router.post('/logout', authenticate, ctrl.logout)

module.exports = router;
