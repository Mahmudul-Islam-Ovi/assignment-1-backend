const { v4: uuidv4 } = require("uuid");
const users = [
  {
    id: uuidv4(),
    username: "Mahmudul islam",
    email: "mahmudulislam.com",
  },
  {
    id: uuidv4(),
    username: "rakibul islam",
    email: "lalalal@yahoo.com",
  },
];
module.exports = users;