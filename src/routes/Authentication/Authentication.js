const express = require("express")
const {handleCreateUser,
    handleGetAllUsers,
    handleGetUser,
    handleUpdateUser,
    handleDeleteUser } = require("../../controllers/user")

const router =  express.Router();

router.route("/").get(handleGetAllUsers).post(handleCreateUser);

router.route("/:id").get(handleGetUser).patch(handleUpdateUser).delete(handleDeleteUser);

module.exports = router;
