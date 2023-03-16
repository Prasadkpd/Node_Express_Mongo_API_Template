import { User } from "../models";

const createUser = async (req, res) => {
  const email = req.body.email;
  const findUser = await User.findUser({ email: email });
  if (!findUser) {
    const newUser = User.createUser(req.body);
    res.json(newUser);
  } else {
    res.json({
      msg: "User ALready Exists",
      success: false,
    });
  }
};

export { createUser };


