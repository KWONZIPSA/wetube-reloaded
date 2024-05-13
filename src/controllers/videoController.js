import Video from "../models/Video";

/*
  mongoDB 6.0부터는 .find()는 콜백을 못씀. promise로 써라
  Video.find({}, (error, videos) => {
  });
  */

/*
  try > 함수 실행 하고, catch => 에러나면 catch 안의 함수 실행

    try {
    console.log("i start");
    const videos = await Video.find({}); //await는 DB를 기다려줘, 순서대로 실행되게 함. callback이었으면 DB가 마지막에 실행됨(DB가 느려서)
    console.log(videos);
    console.log("i finished");
    return res.render("home", { pageTitle: "Home", videos });
  } catch(error) {
    return res.render("server-error" {error});

    */

export const home = async (req, res) => {
  console.log("i start");
  const videos = await Video.find({});
  console.log(videos);
  console.log("i finished");
  return res.render("home", { pageTitle: "Home", videos });
};
export const watch = (req, res) => {
  const { id } = req.params;
  return res.render("watch", { pageTitle: `Watching` });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", { pageTitle: `Editing` });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};
export const postUpload = (req, res) => {
  const { title } = req.body;
  return res.redirect("/");
};
