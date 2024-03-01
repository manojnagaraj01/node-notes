const User = require("../model/userModel");

const createUser = async (req, res) => {
  try {
    console.log(req.body)
    const email = req.body.email;
    console.log(email)
    const findUser = await User.findOne({ email: email });
    if (!findUser) {
      const newUser = User.create(req.body);
      res.json(newUser);
    } else {
      res.json({
        msg: "User already exits ",
        success: false,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      msg: "Internal Server Error",
      success: false,
    });
  }
};

module.exports = { createUser };
