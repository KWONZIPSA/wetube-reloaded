import express from "express";
import { see, edit, deleteVideo, upload } from "../controllers/videoController";

const videoRouter = express.Router();

//const handleWatch = (req, res) => res.send("Watch Video");
//const handleEdit = (req, res) => res.send("Edit Video");

videoRouter.get("/:id(\\d+)", see); //id일필요 없고 콜론(:)이 중요함. 파라미터임.
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);
videoRouter.get("/upload", upload); //파라미터보다 위에 와야지 파라미터로 인식 안됨. 하지만 파라미터(:)를 정규식으로 만들면 순서가 상관 없음.

export default videoRouter;
