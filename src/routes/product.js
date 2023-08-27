const express = require("express");
const router = express.Router();

router.route("/").get();
router.route("/testHp").get();

module.exports = router;
