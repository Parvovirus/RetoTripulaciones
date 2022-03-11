const jwt = require("jsonwebtoken");
const verifytoken = (req, res, next) => {

  const token = req.headers["authorization"];

 
  if (!token) {

    res.json({status: false})
 

  } else {

    const bearerToken = token.split(" ")[1];  
// Verificar  --> jwt.verify(token, secret)
    const decoded = jwt.verify(bearerToken, process.env.SECRET);
// req.userId = 1
    req.userId = decoded.id;
    req.token = bearerToken;
 
    next();
  }
};

module.exports = verifytoken;
