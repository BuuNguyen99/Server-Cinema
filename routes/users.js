const router = require("express").Router();
const Users = require("../models/userModel");
// Bring in the User Registration function
const {
  userAuth,
  userLogin,
  checkRole,
  userRegister,
} = require("../utils/Auth");

const { updateUser, deleteUser } = require("../utils/User");

router.route("").get((req, res) => {
  Users.find((err, users) => {
    if (err) res.status(500).json(err);
    else res.json(users);
  });
});

// Users Registeration Route
router.post("/register", async (req, res) => {
  await userRegister(req.body, "user", res);
});

// Users Login Route
router.post("/login", async (req, res) => {
  await userLogin(req.body, res);
});

router.put("/:id", async (req, res) => {
  await updateUser(req, res);
});

router.delete("/:id", async (req, res) => {
  await deleteUser(req, res);
});

module.exports = router;
