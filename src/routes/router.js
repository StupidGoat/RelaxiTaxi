const express = require("express")
const AuthRouter = require("./Authentication/Authentication");

const router = express.Router();

router.use("/auth", AuthRouter);

module.exports = router;
