var express = require('express');
var router = express.Router();
const fs = require("fs")
const cmscon = require("../json/cmscon.json")
const set = require("../json/set.json")

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json(cmscon)
});

router.get("/set",(req,res,next)=>{
  res.json(set)
})


module.exports = router;
