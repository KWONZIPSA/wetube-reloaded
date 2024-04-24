import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev"); // 스크립트 이름(여기서는 dev)쓰는 방식, combined 방식, common, short, tiny등이 있음.
app.use(logger); //morgan을 쓰면 보다 정교한 로깅이 가능.

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🧨`);

app.listen(PORT, handleListening);
