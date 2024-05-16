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
  const videos = await Video.find({});
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
export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  //const video = new Video({ }) ~~~   await video.save(); 이렇게 해도 되고 아래 처럼 await Video.create({});라고 해도 돼.
  await Video.create({
    title: title, //앞의 title은 스키마의 title, 뒤의 title은 req.body 안의 title 의미. 이름이 같아 축약형으로 title이라고 쓸 수 있음.
    description,
    createdAt: Date.now(),
    hashtags: hashtags.split(",").map((word) => `#${word}`), //split 구분자로 잘라서 어레이로 만들어줌. map은 단어에 뭔가를 붙여줌.
    meta: {
      views: 0,
      rating: 0,
    },
    // String 항목은 숫자로 넣어도 문자로 치환, 숫자항목은 문자를 넣으면 없는 값으로 생성해서 오류를 최소화함
  });

  return res.redirect("/");
};
