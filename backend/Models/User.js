const mongoose = require("mongoose");
const schema = mongoose.Schema;

const UserSchema = schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = User = mongoose.model("User", UserSchema);
