// Creación de la actividad
const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const objetoUserSchema = {
    name: String,
    nameTeacher: String,
    valoracion: String,
    address: String,
    maxPerson: String,
    description: String,
    session: Array,
    img: String,
    date: Date,

};

const userSchema = mongoose.Schema(objetoUserSchema, { versionKey: false })

userSchema.plugin(AutoIncrement, { inc_field: 'idActivity' });

const Activity = mongoose.model("activity", userSchema);


// para exportar
module.exports = Activity;