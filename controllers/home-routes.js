const router = require("express").Router();
const sequelize = require("../config/connection");
const { Category, Comment, Post, PostTag, Tag, User } = require("../models");

// router.get("/", (req, res) => {
//   res.render("home");
// });

router.get("/", (req, res) => {
  Post.findAll({
    attributes: ["id", "post_text", "user_id", "created_at"],
    order: [["created_at", "DESC"]],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      res.render("home", {
        posts,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

// router.get('/login', (req, res) => {
//     res.render('login');
// })

router.get("/home", (req, res) => {
  res.render("home");
});
module.exports = router;
