import express from "express";
import { edit, remove } from "../controllers/userController";

const userRouter = express.Router();

//const handleEdit = (req, res) => res.send("Edit User");
//const handleDelete = (req, res) => res.send("Delete User");

userRouter.get("/edit", edit);
userRouter.get("/remove", remove);

export default userRouter;
//default는 딱 하나만 가능
