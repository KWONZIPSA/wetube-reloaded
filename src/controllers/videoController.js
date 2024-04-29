const fakeUser = {
  username: "KZS",
  loggedIn: true,
};

let videos = [
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 1,
  },
  {
    title: "Second Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 2,
  },
  {
    title: "Third Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 3,
  },
];

export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", fakeUser, videos });
};
export const see = (req, res) => {
  const { id } = req.params;
  const video1 = videos[id - 1];
  console.log("Show video", id);
  return res.render("watch", {
    pageTitle: `Watching ${video1.title}`,
    fakeUser,
  });
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
