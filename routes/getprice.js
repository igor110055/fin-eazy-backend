const {getprice}=require("../controller/getprice")
const {getprice1}=require("../controller/getprice1")
const {getprice2}=require("../controller/getprice2")
const {getprice3}=require("../controller/getprice3")
const {getprice4}=require("../controller/getprice4")
const {getprice5}=require("../controller/getprice5")
const {getpricehome}=require("../controller/getpricehome")
const {buy}=require("../controller/buy")
const {sell}=require("../controller/sell")
const router = require("express").Router();

router.get("/", getprice);
router.get("/1", getprice1);
router.get("/2", getprice2);
router.get("/3", getprice3);
router.get("/4", getprice4);
router.get("/5", getprice5);
router.get("/home", getpricehome);
router.post("/buy", buy);


module.exports = router;