const Post = require('./Post');
const User = require('./User');
const Category = require('./Category');
const Tags = require('./Tags');
const Comment = require('./Comment');

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

Post.belongsTo(Category, {
    foreignKey: 'category_id'
});

Post.belongsToMany(Tags, {
    through: PostTags,
    foreignKey: 'post_id'
})

User.hasMany(Post, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});