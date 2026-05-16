const User = require("../models/User");

const registerUser = async (req, res) => {

    try {

        const { name, email } = req.body;

        const newUser = new User({
            name,
            email
        });

        await newUser.save();

        res.status(201).json({
            message: "User saved successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: "Server Error"
        });
    }
};

module.exports = {
    registerUser
};