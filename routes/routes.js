const router = require("express").Router()
const user = require("../controllers/users.controllers")
const category = require("../controllers/category.controllers")
const activities =require("../controllers/activities.controllers")

 const verifytoken =require("../verifyToken")

router.post("/register", user.registro);
router.post("/checkdata", user.checkData);
router.post("/login", user.login);
router.post("/search", user.search);
router.get("/getusers", user.getUsers);

router.get("/datauser", verifytoken, user.dataUser);
router.post("/getoneuser", user.getOneUser);


router.get("/saveactivity", user.saveActivity);
router.get("/getcategory", category.getCategories);

router.get("/getactivities", activities.getActivities);
router.post("/getoneactivity", activities.getOneActivity);



// router.post("/delete", user.delete)
// router.post("/update", user.update)
// router.post("/insert", user.insert)
// router.get("/datauser", user.dataUser)
// router.get("/data", user.data)


module.exports = router

