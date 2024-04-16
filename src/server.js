import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  //return res.end(); > 리스폰스 종료 아무것도 안보내고 킬함.
  return res.send("Hooray!"); //정보를 브라우저로 보냄.
};

const handleLogin = (req, res) => {
  return res.send("Success Login.");
};

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🧨`);

app.listen(PORT, handleListening);
