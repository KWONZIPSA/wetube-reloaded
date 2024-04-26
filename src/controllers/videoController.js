const fakeUser = {
  username: "KZS",
  loggedIn: true,
};

export const trending = (req, res) => {
  const videos = [
    {
      title: "Hello",
    },
    {
      title: "Video #2",
    },
    {
      title: "Whatsup",
    },
  ];
  return res.render("home", { pageTitle: "Home", fakeUser, videos });
};
export const see = (req, res) => {
  console.log(req.params);
  res.render("watch", { pageTitle: "Watch" });
};
export const edit = (req, res) => {
  console.log(req.params);
  res.render("edit", { pageTitle: "Edit" });
};
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("Delete Video");
};
