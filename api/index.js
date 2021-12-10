import dotenv from 'dotenv';
import express from 'express';
import {connect} from './db.js';
import user from './models/user';
import jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';
import bcrypt from 'bcryptjs';
import {authenticateJWT} from './middleware/authentication';

dotenv.config();

connect();

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.post('/user', async (req, res) => {
  let authHeader = null;
  try {
    authHeader = req.body.headers.Authorization;
  } catch {
    authHeader = req.headers.authorization;
  }
  const token = authHeader.split(' ')[1];

  jwt.verify(token, process.env.TOKEN_KEY, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
  });
  const tokenDetails = jwtDecode(token);
  try {
    const email = tokenDetails.email;
    const findUser = await user.findOne({
      email,
    });

    const userDetails = {
      id: findUser._id,
      first_name: findUser.first_name,
      last_name: findUser.last_name,
      email: findUser.email,
    };
    res.send(userDetails);
  } catch {
    console.log('Could not find user');
    res.sendStatus(401);
  }
});

app.post('/refresh-token', async (req, res) => {
  //console.log("Refreshing Token");
  // Verify token

  const token = req.body.headers.Authorization;
  const refresh_token = token.split(' ')[1];

  jwt.verify(refresh_token, process.env.REFRESH_TOKEN_KEY, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    } else {
      const jwtDecoded = jwtDecode(refresh_token);
      const token = jwt.sign(
        {
          user_id: jwtDecoded.user_id,
          email: jwtDecoded.email,
        },
        process.env.TOKEN_KEY
      );

      const refreshToken = jwt.sign(
        {
          user_id: jwtDecoded.user_id,
          email: jwtDecoded.email,
        },
        process.env.REFRESH_TOKEN_KEY,
        {
          expiresIn: '30d',
        }
      );

      res.send({access_token: token});
    }
  });
});

// Call function to verify JWT token in request header is valid
app.post('/login', async (req, res) => {
  console.log('Logging user in');
  /* try { */
  const {email, password} = req.body;
  //console.log(email);
  const findUser = await user.findOne({
    email,
  });

  const checkPassword = await bcrypt.compare(password, findUser.password);
  if (checkPassword) {
    // Password is true
    const token = jwt.sign(
      {
        user_id: findUser._id,
        email: email,
      },
      process.env.TOKEN_KEY
    );
    const refreshToken = jwt.sign(
      {
        user_id: findUser._id,
        email: email,
      },
      process.env.REFRESH_TOKEN_KEY,
      {
        expiresIn: '30d',
      }
    );
    const data = {
      uid: findUser._id,
      email: email,
      access_token: token,
      refresh_token: refreshToken,
    };
    findUser.token = token;

    /* const oneDayInMilli = 24 * 60 * 60 * 1000;
    const fifteenMinsInMilli = 15 * 60 * 1000;
    res.cookie("access_token", token, {
      maxAge: fifteenMinsInMilli,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production" ? true : false,
    });
    */

    res.cookie('refresh_token', refreshToken, {
      maxAge: 60 * 60 * 24 * 30,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production' ? true : false,
    });
    res.send({access_token: token});
  } else {
    // Password is false
    const result = 'Password does not match';
    res.sendStatus(401);
  }
  /* } catch (err) {
    console.log(err);
  } */
});

app.post('/register', async (req, res) => {
  console.log('Registering New user');
  try {
    const {first_name, last_name, email, password} = req.body;

    if (!(email && password && first_name && last_name)) {
      res.status(400).send('All input is required');
    }

    const existingUser = await user.findOne({
      email,
    });

    if (existingUser) {
      return res.status(409).send('User Already Exists, please login.');
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
        email: email,
      },
      process.env.TOKEN_KEY,
      {
        expiresIn: '15m',
      }
    );
    const refreshToken = jwt.sign(
      {
        user_id: newUser._id,
        email: email,
      },
      process.env.REFRESH_TOKEN_KEY,
      {
        expiresIn: '24h',
      }
    );
    newUser.token = token;
    const data = {
      email: email,
      uid: newUser._id,
      access_token: token,
      refresh_token: refreshToken,
    };

    res.send({token: token});
  } catch (err) {
    console.log(err, 'Unable to register user');
  }
});

app.post('/logout', (req, res) => {
  console.log('Logging user out');
  /* res.clearCookie("access_token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production" ? true : false,
  });*/
  res.clearCookie('refresh_token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production' ? true : false,
  });
  res.sendStatus(200);
});

// Checks if current JWT is valid
//app.use(authenticateJWT);

app.get('/testroute', (req, res) => {
  console.log('Test route');
  res.sendStatus(200);
});
export default {
  path: '/api',
  handler: app,
};
