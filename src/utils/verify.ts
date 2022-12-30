import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken"

export const verify=(req: Request, res: Response, next: NextFunction)=>{
    const token = req.header("token")
    if (token) {
      jwt.verify(token, "ihihoahhh9hh", (err) => {
        if (err) return res.status(403).send(err)
        next();
      });
    } else {
      res.status(400).send("you are not logged in")
    }
}