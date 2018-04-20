
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema ({
  fullName: { type: String, required: true },
  email: { type:String, required: true, unique: true },
  role:{
    type: String,
    enum: ["normal", "admin"],
    default: "normal"
  },

  // normal sing up & and log in 
  encryptedPassword: { type:String },

  // login with google
  googleID: {type: String},

  //login with gitHub
  githubID: {type: String}
  
  },{
    timestamps:true
});

userSchema.virtual("isAdmin").get(function(){
  return this.role === "admin";
})

const User = mongoose.model("User", userSchema);

module.exports = User; 