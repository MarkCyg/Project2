const seedUser = require("./user-seeds");
const seedPost = require("./post-seeds");
const seedComments = require("./comment-seeds");
const seedTag = require("./tag-seeds");
const seedPostTags = require("./postTags-seeds");
const seedCategory = require("./category-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n-----DATABASE SYNCED ------\n");
  await seedUser();
  console.log("\n-----Users SYNCED ------\n")
  await seedTag();
  await seedCategory();
  await seedPost();
  await seedComments();
  await seedPostTags
  
  process.exit(0);
};

seedAll();
