import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev"); // 스크립트 이름(여기서는 dev)쓰는 방식, combined 방식, common, short, tiny등이 있음.

const methodLogger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  // return res.send("lalal"); > 이래버리면 리턴으로 끝나서 next가 실행 안됨.
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  console.log("You may continue.");
  next();
};

const handleHome = (req, res) => {
  return res.send("I love middlewares.");
};

const handleProtected = (req, res) => {
  return res.send("Welcome to the private lounge.");
};

app.use(logger); //morgan을 쓰면 보다 정교한 로깅이 가능.
app.use(methodLogger, privateMiddleware); //use가 get보다 먼저 나와야하는데, 모든 라우트에서 작동하게 되도록.

app.get("/", handleHome);
app.get("/protected", handleProtected);

/* 240416 get, request, responses  강의
const handleHome = (req, res) => {
  //return res.end(); > 리스폰스 종료 아무것도 안보내고 킬함.
  return res.send("<h1>Hooray!</h1>"); //정보를 브라우저로 보냄.
};

const handleLogin = (req, res) => {
  return res.send({ message: "Success Login." });
};

app.get("/", handleHome);
app.get("/login", handleLogin);
*/

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🧨`);

app.listen(PORT, handleListening);
