const { getAll, create, search, remove, uppdate } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/")
    .get(getAll)
    .post(create);

userRouter.route("/:id")
    .get(search)
    .delete(remove)
    .put(uppdate)

module.exports = userRouter;