import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const app = express();
const logger = morgan("dev"); // 스크립트 이름(여기서는 dev)쓰는 방식, combined 방식, common, short, tiny등이 있음.
app.use(logger); //morgan을 쓰면 보다 정교한 로깅이 가능.

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(express.urlencoded({ extended: true })); //먼저 와야 나머지 미들웨어가 form을 인식함.
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

export default app;
