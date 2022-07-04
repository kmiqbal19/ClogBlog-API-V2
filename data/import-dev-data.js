// Configure the PROCESS ENV Variables
const fs = require("fs");
const dotenv = require("dotenv");

dotenv.config({ path: "../.env" });
// console.log(process.env.DATABASE);
const mongoose = require("mongoose");
const Post = require("../model/postModel");

const DB = process.env.DATABASE_URL;
mongoose.connect(DB).then((con) => {
  console.log("You have successfully logged in to MongoDB!");
});
// READ JSON FILE
const posts = JSON.parse(fs.readFileSync(`${__dirname}/posts.json`, "utf-8"));

// IMPORT DATA IN DB
const importData = async () => {
  try {
    await Post.create(posts);

    console.log("Data has imported successfully....");
  } catch (err) {
    console.log(err);
  }
};
// DELETE DATA IN DB
const deleteData = async () => {
  try {
    await Post.deleteMany();

    console.log("Data has been deleted successfully....");
  } catch (err) {
    console.log(err);
  }
};
console.log(process.argv);
if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
