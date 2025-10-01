import express from "express";
import validator from "validator";

const app = express();

const newUser = {
  fullName: "Marcus Aurelius",
  username: "Marcus1",
  email: "marcus@holy-roman-empire,org",
  password: "Gladiators!",
};

const newUser2 = {
  fullName: "Marcus Smith",
  username: "Marcus1 ",
  email: "marcus@average-empire.org",
  password: "Moggy1",
};

console.log(validator.isEmail(newUser.email));

app.listen(8000, () => console.log("listening 8000"));
