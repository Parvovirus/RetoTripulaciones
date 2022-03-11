const router = require("express").Router()
const user = require("../controllers/users.controllers")



router.post("/register", user.registro);
router.post("/checkdata", user.checkData);
router.post("/login", user.login);
router.post("/search", user.search);
router.get("/getusers",user.getUsers)
router.get("/saveactivity",user.saveActivity)

// router.post("/delete", user.delete)
// router.post("/update", user.update)
// router.post("/insert", user.insert)
// router.get("/datauser", user.dataUser)
// router.get("/data", user.data)


module.exports = router

