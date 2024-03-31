const express =require("express");
const router = express.Router();

const {formdata}  = require("../Express/formdata");

router.post("/formdata", formdata);

module.exports =router;