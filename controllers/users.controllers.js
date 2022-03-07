const mongoose = require("mongoose");
const userModel = require("../models/users.model");
const bcrypt = require('bcrypt');



const user = {
    registro: async (req, res) => {
        const { name, lastName, email, dni, address, population, password, cp } = req.body;
        //! ---- Variables de la información del registro -----


        // ! Expresiones Regulares validaciones:
        // var regExpDni = new RegExp(/^[0-9]{8}\-?[a-zA-Z]{1}/);
        // var regExpName = new RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ]+$/u); //agregado espacio para poner dos apellidos
        // var regExpEmail = new RegExp(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/);
        // var regExpPass = new RegExp(/^(?=\w*\d)(?=\w*[a-zA-Z])\S{6,10}$/);
        // var regExpCp = new RegExp(/^\d{5}$/);
        // var regExpDir = new RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð\d / -]+$/u) //agregado números y el espacio para poner en la dirección


        //! Zona de validaciones

        // const nameOk = regExpName.test(name);
        // const lastNameOk = regExpName.test(lastName);

        // const emailOk = regExpEmail.test(email);
        // const passOk = regExpPass.test(password);
        // const dniOk = regExpDni.test(dni) && validation_dni(dni);
        // const populationOk = regExpDir.test(population);
        // const cpOk = regExpCp.test(cp);
        // const addressOk = regExpDir.test(address);

        // var ok = nameOk && lastNameOk && emailOk && passOk && dniOk && cpOk && populationOk && addressOk;
        // console.log(req.body)
        const okey = true;
        if (okey) {
            const existUser = await userModel.findOne({ email });
            if (!existUser) {
                const insertUser = new userModel({
                    name,
                    lastName,
                    email,
                    dni,
                    password,
                    address,
                    cp,
                    population
                })

                insertUser.save();
            } else {
                console.log("Existe el usuario")
            }
        }
        res.json(req.body);
    },

    login: async (req, res) => {
        const { email, password } = req.body;
        const existUser = await userModel.findOne({ email });
        console.log(existUser)
        if (existUser) {
            if (existUser.password == password) {
                console.log(`Bienvenido ${existUser.name}`)
                // enviar al index
            } else {
                console.log("Incorrecto el password")
            }
        } else {
            console.log("No estás registrado en la bd")
        }
    }


}







module.exports = user //revisar el nombre para importarlo en las rutas