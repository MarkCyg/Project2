const { Post } = require("../models");

// Title is the question that user posts

const postData = [
  {
    post_title: "Connecting HTML and CSS",
    post_text: "How to connect HTML with my CSS?",
    user_id: 1,
    category_id: 1,
    tag_id: 1,
  },
  {
    post_title: "Remove branch locally using GIT",
    post_text: "How to remove my branch locally by using git?",
    user_id: 2,
    category_id: 2,
    tag_id: 2,
  },
  {
    post_title: "Files in gitignore",
    post_text: "Why do I need to put some files into .gitignore?",
    user_id: 3,
    category_id: 3,
    tag_id: 5,
  },
  {
    post_title: "MVP and MVC",
    post_text: "What are some differences between MVP and MVC?",
    user_id: 4,
    category_id: 4,
    tag_id: 4,
  },
  {
    post_title: "Importing SQL files",
    post_text: "How to import my mySQL file?",
    user_id: 5,
    category_id: 5,
    tag_id: 3,
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
