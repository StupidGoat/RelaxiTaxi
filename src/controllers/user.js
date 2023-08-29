const User = require("../Models/user");
const {isEmptyObject} = require("../utils/commonUtils")

async function handleCreateUser (req, res)  {
    const body = req.body;
    if(!body || !body.id || !body.firstName || !body.phoneNumber || !body.userName){
        return res.status(400).json({msg: "need required fields"});
    }
    const user = await User.find({id: body.id});
    console.log(user);
    if(isEmptyObject(user)) {
        return res.status(400).json({msg: "user already exists"});
    }else {
        await User.create({
            id: body.id,
            firstName: body.firstName,
            lastName: body.lastName ? body.lastName : null,
            phoneNumber: Number(body.phoneNumber),
            userName: body.userName
        })
        return res.status(201).json({msg: "user added successfully"});
    }

}

async function handleGetAllUsers (req, res) {
    const userData = await User.find({});
    return res.status(200).json(userData);
}

async function handleGetUser (req, res) {
    const body = req.body;
    if (body && body.id) {
       const userData = await User.find({id: body.id});
       if(userData) {
           return res.status(200).json(userData);
       } else {
          return  res.status(400).json({msg : "no user found"});
       }
    } else {
        return res.status(400).json({msg: "invalid Id"});
    }
}

async function handleUpdateUser (req, res) {
    // yet to write
}

async function handleDeleteUser (req, res) {
    const body = req.body;
    if (body && body.id) {
        await User.deleteOne({id: body.id});
        return res.status(200).json({msg: "user deleted successfully"});
    } else {
        return res.status(400).json({msg: "invalid Id"});
    }
}

module.exports = {
  handleCreateUser,
  handleGetAllUsers,
  handleGetUser,
  handleUpdateUser,
  handleDeleteUser
};
