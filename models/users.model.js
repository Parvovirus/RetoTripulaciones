// Creación del producto
const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const objetoUserSchema = {
    name: String,
    age: String,
    address: String,
    population: String,
    photo: String,
    tlf: String,
    idCoHouse: Number,
    role: Number
};

const userSchema = mongoose.Schema(objetoUserSchema, { versionKey: false })

userSchema.plugin(AutoIncrement, { inc_field: 'idUser' });

const User = mongoose.model("users", userSchema);

// para exportar
module.exports = User;