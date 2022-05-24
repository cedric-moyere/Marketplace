const express = require("express");
const router = express.Router();
const stuffCtrl = require("../controllers/stuff");
const multer = require("../middleware/multer-config");

router.get("/", stuffCtrl.getAllStuff);
router.post("/", multer, stuffCtrl.createThing);
router.get("/:id", stuffCtrl.getOneThing);
router.put("/:id", multer, stuffCtrl.modifyThing);
router.delete("/:id", stuffCtrl.deleteThing);

module.exports = router;
