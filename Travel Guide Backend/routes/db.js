const express = require("express");
const router = express.Router();
const { addUser, getUsers, deleteUser, updateUser,addUserFavorite , getUserFavorite} = require("../controllers/db");

router.post("/addUser", addUser);
router.get("/getUsers", getUsers);
router.delete("/deleteUser/:id", deleteUser);
router.put("/updateUser/:id", updateUser);
router.post("/addFavorite", addUserFavorite);
router.get("/getUserFavorite/:userId", getUserFavorite);

module.exports = router;
