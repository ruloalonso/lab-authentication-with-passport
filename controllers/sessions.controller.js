const express = require("express");
const User = require("../models/user");

module.exports.create = (req, res, next) => {
  res.render("passport/signup");
}

module.exports.doCreate = (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body);
  console.log(email);
  console.log(password);
}
