import express from "express";
import { watch, edit } from "../controllers/videoController";

const videoRouter = express.Router();

//const handleWatch = (req, res) => res.send("Watch Video");
//const handleEdit = (req, res) => res.send("Edit Video");

videoRouter.get("/watch", watch);
videoRouter.get("/edit", edit);

export default videoRouter;
