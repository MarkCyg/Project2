const { User } = require("../models");

const userData = [
  {
    username: "James Hilton",
    email: "jameshilton@gmail.com",
    password: "JAMESHILTON",
  },
  {
    username: "Percy Vere",
    email: "percyvere@yahoo.com",
    password: "PERCYVERE",
  },
  {
    username: "Jack Aranda",
    email: "jackaranda@gmail.com",
    password: "JACKARANDA",
  },
  {
    username: "Fran G. Pani",
    email: "frangpani@gmail.com",
    password: "FRANGPANI",
  },
  {
    username: "John Quil",
    email: "johnquil@yahoo.com",
    password: "JOHNQUIL",
  },
];

const seedUser = () => Category.bulkCreate(userData);

module.exports = seedUser;
