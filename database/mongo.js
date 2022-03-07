
// para conectar la base de datos
const mongoose = require("mongoose");

// url del mongo
const url = "mongodb://localhost:27017/tripulaciones";

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Base de datos de Mongo conectada");
    })
    .catch((err) => {
        console.error(err);
    });

