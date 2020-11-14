const Users = require("../models/userModel");
const bcrypt = require("bcryptjs");

const updateUser = async (req, res) => {
  if (!req.body._id) {
    return res.status(500).send("ID is required");
  } else {
    console.log(req.body);
    let checkPassword = req.body.password.substring(0,1);
    console.log(checkPassword);
    let password;
    if (checkPassword === "$") {
      password = req.body.password;
    } else {
      password = await bcrypt.hash(req.body.password, 11);
    }
    Users.updateOne(
      {
        _id: req.body._id,
      },
      {
        userName: req.body.userName,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender,
        birth: req.body.birth,
        password: password,
        address: req.body.address,
        currentStar: req.body.currentStar,
        targets: req.body.targets,
      },
      function (err) {
        if (err) return res.status(500).json(err);
        else {
          Users.find((err, result) => {
            if (err) {
              res.status(500).json(err);
            } else {
              res.json(result);
            }
          });
        }
      }
    );
  }
};

const deleteUser = async (req, res) => {
  console.log(req.params.id);
  Users.deleteOne(
    {
      _id: req.params.id,
    },
    (err) => {
      if (err) {
        return res.status(500).json(err);
      } else {
        Users.find((err, result) => {
          if (err) {
            res.status(500).json(err);
          } else {
            res.json(result);
          }
        });
      }
    }
  );
};
module.exports = { updateUser, deleteUser };
