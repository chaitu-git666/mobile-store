const express = require("express");
const router = express.Router();
const mobileController = require("../controllers/mobiles-controller");

const Mobile = require("../model/Mobile");

router.get("/",mobileController.getAllMobiles);
  //this route show all of the mobiles
router.post("/",mobileController.addMobile);

router.get("/:id",mobileController.getById);

router.put("/:id",mobileController.updateMobile);

router.delete("/:id",mobileController.deleteMobile);

module.exports=router;