import dotenv from "dotenv";
import express from "express";
import { connect } from "./db.js";
import user from "./models/user";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { authenticateJWT } from "./middleware/authentication";

dotenv.config();

connect();

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

// Call function to verify JWT token in request header is valid
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const findUser = await user.findOne({
    email,
  });

  const checkPassword = await bcrypt.compare(password, findUser.password);
  if (checkPassword) {
    // Password is true
    const result = "Password does match!";
    const token = jwt.sign(
      {
        user_id: findUser._id,
        email,
      },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    const data = {
      uid: findUser._id,
      email: email,
    };
    findUser.token = token;
    const oneDayInSeconds = 24 * 60 * 60;
    res
      .cookie("access_token", token, {
        maxAge: oneDayInSeconds,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production" ? true : false,
      })
      .send(data);
  } else {
    // Password is false
    const result = "Password does not match";
    res.send(result);
  }
});

app.post("/register", async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;

    if (!(email && password && first_name && last_name)) {
      res.status(400).send("All input is required");
    }

    const existingUser = await user.findOne({
      email,
    });

    if (existingUser) {
      return res.status(409).send("User Already Exists, please login.");
    }

    const encryptedPassword = await bcrypt.hash(password, 10);
    const newUser = await user.create({
      first_name,
      last_name,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    const token = jwt.sign(
      {
        user_id: newUser._id,
        email,
      },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );

    newUser.token = token;

    res.status(201).json(newUser);
  } catch (err) {
    console.log(err);
  }
});

app.get("/logout", (req, res) => {
  res.clearCookie("access_token").send("Cookie Cleared");
});

// Checks if current JWT is valid
app.use(authenticateJWT);

export default {
  path: "/api",
  handler: app,
};
