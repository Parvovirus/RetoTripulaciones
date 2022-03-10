// Creación del producto
const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const objetoUserSchema = {
    code: String,
    name: String,
    activity: [Number],
    place: String,
    price: Number,
    banner: String
};

const userSchema = mongoose.Schema(objetoUserSchema, { versionKey: false })

userSchema.plugin(AutoIncrement, { inc_field: 'idColiving' });

const Coliving = mongoose.model("colivings", userSchema);

// para exportar
module.exports = Coliving;