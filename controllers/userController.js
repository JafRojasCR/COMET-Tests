const User = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
};

exports.createUser = async (req, res) => {
  const { userId, name, password } = req.body;
  if (!password) {
    return res.status(400).json({ message: "Password is required" });
  }
  const salt = await bcrypt.genSalt(10); // 10 rondas de generación de salt
  const hashedPassword = await bcrypt.hash(password, salt);
  // Create a new user instance with a hashed password with a salt of 10
  const newUser = new User({ id: userId, name, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: "Error creating user" });
  }
};
