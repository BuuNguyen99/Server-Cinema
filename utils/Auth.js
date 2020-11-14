const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../models/userModel");
const { SECRET } = require("../config");
const userRegister = async (userDets, role, res) => {
  try {
    // validate the email
    let emailNotRegistered = await validateEmail(userDets.email);
    if (!emailNotRegistered) {
      return res.status(201).json({
        message: `Email Đã Được Đăng ký.`,
        success: false,
      });
    }

    // Get the hashed password

    const password = await bcrypt.hash(userDets.password, 11);
    // create a new user
    const newUser = new User({
      ...userDets,
      password,
      role,
    });

    await newUser.save();
    return res.status(201).json({
      message: "Đăng ký thành công, Vui lòng đăng nhập.",
      success: true,
    });
  } catch (err) {
    // Implement logger function (winston)
    return res.status(500).json({
      message: "Không thể tạo tài khoản.",
      success: false,
    });
  }
};

/**
 * @DESC To Login the user (ADMIN, SUPER_ADMIN, USER)
 */
const userLogin = async (userCreds, res) => {
  let { email, password } = userCreds;
  // First Check if the username is in the database
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(201).json({
      message: "Email is not found. Invalid login credentials.",
      success: false,
    });
  }
  // We will check the role

  // That means user is existing and trying to signin fro the right portal
  // Now check for the password
  let isMatch = await bcrypt.compare(password, user.password);
  console.log(isMatch);
  if (isMatch) {
    // Sign in the token and issue it to the user
    let token = jwt.sign(
      {
        user_id: user._id,
        userName: user.userName,
        email: user.email,
        phone: user.phone,
        gender: user.gender,
        birth: user.birth,
        password: user.password,
        address: user.address,
        currentStar: user.currentStar,
        targets: user.targets,
        role: user.role,
      },
      SECRET,
      { expiresIn: "7 days" }
    );

    let result = {
      _id: user._id,
      userName: user.userName,
      email: user.email,
      phone: user.phone,
      gender: user.gender,
      birth: user.birth,
      password: password,
      address: user.address,
      currentStar: user.currentStar,
      targets: user.targets,
      role: user.role,
      token: `Bearer ${token}`,
      expiresIn: 168,
    };

    return res.status(201).json({
      ...result,
      message: "Bạn đã đăng nhập.",
      success: true,
    });
  } else {
    return res.status(201).json({
      message: "Mật khẩu không đúng.",
      success: false,
    });
  }
};

/**
 * @DESC Passport middleware
 */
const userAuth = passport.authenticate("jwt", { session: false });

const checkRole = (roles) => (req, res, next) =>
  !roles.includes(req.user.role)
    ? res.status(401).json("Unauthorized")
    : next();

const validateEmail = async (email) => {
  let user = await User.findOne({ email });
  return user ? false : true;
};
module.exports = {
  userAuth,
  checkRole,
  userLogin,
  userRegister,
};
