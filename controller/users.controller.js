let users = require('../model/users.model');
const { v4: uuidv4 } = require("uuid");
//get user 
exports.getUser = (req, res) => {
    res.status(200).json({
        users
    })
}
// create user 
exports.createUser = (req, res) => {
    const newUser ={
        id:uuidv4(),
        username : req.body.username,
        email : req.body.email
    }
    users.push(newUser);
    res.status(200).json({
         users
    })
}

//update user
exports.updateUser = (req, res) => {
    const userId = req.params.id;
    const {username,email} = req.body;
    users.filter((user) => user.id ===userId).map((selectedUser)=>{
        selectedUser.username = username;
        selectedUser.email = email;
    })
    res.status(200).json({
         users
    })
}

//delete user
exports.deleteUser = (req, res) => {
    const userId = req.params.id;
    const {username,email} = req.body;
    users = users.filter((user) => user.id !== userId);
   
    res.status(200).json({
         users
    })
}     