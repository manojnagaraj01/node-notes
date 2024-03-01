const router = require("express").Router()
const {createUser} = require('../controllers/authController');


//routing
//REGISTER || POST METHOD
router.post("/registerid",createUser);

//LOGIN || POST METHOD
// router.post("/login", loginController);

// //Profile PASSWORD
// router.post("/profile", profile);

// //getalluser
// router.get("/get-allusers",requireSignIn, isAdmin, getalluser)

// //getSingleuser
// router.get("/:id",isAdmin, getSingleUser)

// //deleteeuser
// router.delete("/:id",isAdmin, deleteUser)

// //updateuser
// router.put("/edit-user", requireSignIn, updateUser);




module.exports = router;