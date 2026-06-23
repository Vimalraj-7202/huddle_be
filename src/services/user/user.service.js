import User from "../../models/user/user.model.js";

//create user
export const createUser = async ({ name, email, password, phone_no }) => {
  const exist = await User.findOne({ email });
  if (exist) {
    throw new Error("User already exists");
  }
  const createUser = await User.create({ name, email, password, phone_no });

  return {
    id: createUser._id,
    name: createUser.name,
    email: createUser.email,
    password: createUser.password,
    phone: createUser.phone_no,
  };
};

//update user
export const updateUser = async (id, data) => {
  if (!id) throw new Error("Failed to update user");
  const updateUser = await User.findByIdAndUpdate(id, data, { new: true });
  return {
    id: updateUser._id,
    name: updateUser.name,
    email: updateUser.email,
    phone_no: updateUser.phone_no,
  };
};

//delete user
export const deleteUser = async (id) => {
  if (!id) throw new Error("Failed to delete user");
  const deleteUser = await User.findByIdAndDelete(id);
  if (!deleteUser) throw new Error("User not found");
  return {
    id: deleteUser._id,
    message: "User deleted successfully",
  };
};

//getall user

export const getAllUsers = async () => {
  const users = await User.find();
  return {
    users,
    message: "Users fetched successfully",
  };
};
