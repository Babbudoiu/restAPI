const { Router } = require("express");
const { createUser, getOneUser } = require("../controllers/user.controllers");


const userRouter = Router();

userRouter.post("/users", createUser);
userRouter.get("/users/:username", getOneUser);


module.exports = userRouter;
