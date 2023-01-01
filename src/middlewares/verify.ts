import { Response, Request, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"
import { IUserRequest } from "../requests/user";
import { User } from "../types/user";

module.exports = (req: IUserRequest, res: Response, next: NextFunction) => {
  const token = req.header("token")
  if (token) {
    jwt.verify(token, "ihihoahhh9hh", (err, decodedToken) => {
      if (err) return res.status(403).send(err)
      req.user = decodedToken as undefined | JwtPayload
      next();
    });
  } else {
    res.status(403).send("you are not logged in")
  }
}