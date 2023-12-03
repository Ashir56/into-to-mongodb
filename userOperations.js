const userModel = require('./models/userModel');

const createUser = async (name, gender, email, username, password, age) => {
    let user = new userModel();
    user.name = name;
    user.age = age;
    user.gender = gender;
    user.email = email;
    user.username = username;
    user.password = password;

    await user.save()
    return user;

};


const updateUser = async (_id, name, gender, email, username, password, age) => {
    let user = await userModel.findById(_id);
    user.name = name;
    user.age = age;
    user.gender = gender;
    user.email = email;
    user.username = username;
    user.password = password;
    await user.save();
    return user;
  };
  const getUsers = async () => {
    let users = await userModel.find();
    return users;
  };
  const deleteUsers = async (_id) => {
    let user = await userModel.findByIdAndDelete(_id);
    return user;
  };

  module.exports.createUser = createUser;
  module.exports.getUsers = getUsers
  module.exports.deleteUsers = deleteUsers;
  module.exports.updateUser = updateUser;