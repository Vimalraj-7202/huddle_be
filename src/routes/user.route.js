import express from "express";
import {
  CreateUser,
  UpdateUser,
  DeleteUser,
  getAllusers,
} from "../../src/controllers/user/user.controller.js";

const router = express.Router();
router.post("/adduser", CreateUser);
router.put("/updateuser/:id", UpdateUser);
router.delete("/deleteuser/:id",DeleteUser);
router.get("/all", getAllusers);

export default router;
