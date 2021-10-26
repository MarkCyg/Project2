const Post = require("./Post");
const User = require("./User");
const Category = require("./Category");
const Tag = require("./Tags");
const Comment = require("./Comment");
const PostTag = require("./PostTags");
const Tag = require("./Tags");

Post.hasMany(Comment, {
  foreignKey: "post_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

Post.belongsToMany(Category, {
  foreignKey: "category_id",
});

Post.belongsToMany(Tag, {
  through: PostTag,
  foreignKey: "post_id",
});

User.hasMany(Post, {
  foreignKey: "user_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Category.hasMany(Post, {
  foreignKey: "category_id",
});

Tag.belongsToMany(Post, {
    through: PostTag,
    foreignKey: 'tag_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

