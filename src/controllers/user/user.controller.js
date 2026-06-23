import {
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
} from "../../services/user/user.service.js";

//create user
export const CreateUser = async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(200).json({ user, message: "User created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//update user
export const UpdateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updateuser = await updateUser(id, req.body);
    res.status(200).json({ updateuser, message: "User updated successfully" });
  } catch (error) {
    res.status(400).json({ message: "Failed to update user" });
  }
};

//delete user
export const DeleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteuser = await deleteUser(id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Failed to delete user" });
  }
};

//getall user
export const getAllusers = async (req, res) => {
  try {
    const getallUsers = await getAllUsers();
    res
      .status(200)
      .json({ getallUsers, message: "Users fetched successfully" });
  } catch (error) {
    res.status(400).json({ message: "Failed to fetch users" });
  }
};
