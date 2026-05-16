// const express = require("express");
// const mongoose = require("mongoose");
// const User = require("./models/User");
// const cors = require("cors");

// const app = express();

// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// mongoose.connect(
//     "mongodb+srv://barath:barath123@mern1.mavjtjj.mongodb.net/test1?appName=mern1",
//      {
//     tls: true,
//     tlsAllowInvalidCertificates: true
//   }
// )
// .then(() => console.log("MongoDB Connected"))
// .catch((err) => console.log(err));

// // Home route
// app.get("/", (req, res) => {
//     res.send("Backend Running");
// });

// // Register API
// app.post("/register", async (req, res) => {

//     try {
//         const { name, email } = req.body;

//         const newUser = new User({
//             name,
//             email
//         });

//         await newUser.save();

//         res.json({
//             message: "User saved in MongoDB Atlas"
//         });

//     } catch (error) {
//         res.status(500).json({
//             message: "Error saving user"
//         });
//     }
// });

// // Server
// app.listen(5000, () => {
//     console.log("Server running on port 5000");
// });



const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const userRoutes = require("./routes/userRoutes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/", userRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});