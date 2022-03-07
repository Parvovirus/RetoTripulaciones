// Creación del producto
const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const objetoUserSchema = {
    name: String,
    lastName: String,
    email: String,
    dni: String,
    password: String,
    address: String,
    cp: String,
    population: String,
    role: Number
};

const userSchema = mongoose.Schema(objetoUserSchema, {versionKey: false})

userSchema.plugin(AutoIncrement, {inc_field: 'idUser'});

const User = mongoose.model("users", userSchema);


// para exportar
module.exports = User;