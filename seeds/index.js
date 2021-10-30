const seedUser = require('./user-seeds');
const seedPost = require('./post-seeds');
const seedComments = require('./comment-seeds');
const seedTag = require('./tag-seeds');
const seedPostTags = require('./postTags-seeds');
const seedCategory = require('./category-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    // console.log('JUMP#213487f')
    await seedUser();
    await seedPostTags();
    await seedComments();
    await seedTag();
    await seedCategory();
    await seedPost();

    process.exit(0);
};

seedAll();