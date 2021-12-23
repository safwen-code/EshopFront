const bcrypt = require("bcryptjs");

const users = [
  {
    name: "safwen",
    email: "safwen@gmail.com",
    password: bcrypt.hashSync("1235", 10),
    isAdmin: true,
  },
  {
    name: "beha",
    email: "beha@gmail.com",
    password: bcrypt.hashSync("1235", 10),
  },
  {
    name: "siwar",
    email: "siwar@gmail.com",
    password: bcrypt.hashSync("1235", 10),
  },
];

module.exports = users;
