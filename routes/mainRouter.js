const express = require("express");
const router = express.Router();
const mainService = require("../services/mainService");

router.get("/", mainService.getMain);
router.get("/decrypt", mainService.decrypt);

module.exports = router;