import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

export const authenticateJWT = function (req, res, next) {
  console.log("Auth middleware");
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.TOKEN_KEY, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
