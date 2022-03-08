const mongoose = require("mongoose");
const userModel = require("../models/users.model");
const bcrypt = require('bcrypt');



const user = {
    registro: async (req, res) => {
        const { name, lastName, email, dni, address, population, password, cp } = req.body;


        // ! Expresiones Regulares validaciones:
        var regExpDni = new RegExp(/^[0-9]{8}\-?[a-zA-Z]{1}/);
        var regExpName = new RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ]+$/u); //agregado espacio para poner dos apellidos
        var regExpEmail = new RegExp(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/);
        var regExpPass = new RegExp(/^(?=\w*\d)(?=\w*[a-zA-Z])\S{6,10}$/);
        var regExpCp = new RegExp(/^(?:0[1-9]\d{3}|[1-4]\d{4}|5[0-2]\d{3})$/);
        var regExpDir = new RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð\d / -]+$/u) //agregado números y el espacio para poner en la dirección

        //! Zona de validaciones

        const nameOk = regExpName.test(name);
        const lastNameOk = regExpName.test(lastName);
        const emailOk = regExpEmail.test(email);
        const passOk = regExpPass.test(password);
        const dniOk = regExpDni.test(dni) && validation_dni(dni);
        const populationOk = regExpDir.test(population);
        const cpOk = regExpCp.test(cp);
        const addressOk = regExpDir.test(address);

        var ok = nameOk && lastNameOk && emailOk && passOk && dniOk && populationOk && cpOk && addressOk;


        if (ok) {
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
                res.json("userRegister")
            } else {
                res.json("userExist");
                console.log("Existe el usuario")
            }
        } else {
            if (!nameOk) {
                res.json("incorrectFormatName")
            }
            else if (!lastNameOk) {
                res.json("incorrectFormatlastName")
            }
            else if (!emailOk) {
                res.json("incorrectFormatEmail")
            }
            else if (!dniOk) {
                res.json("incorrectFormatDni")
            }
            else if (!passOk) {
                res.json("incorrectFormatPass")
            }
            else if (!cpOk) {
                res.json("incorrectFormatCp")
            }
            else if (!populationOk) {
                res.json("incorrectFormatPopulation")
            }
        }
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
                res.json("incorrectLogin");
                console.log("Incorrecto el password")
            }
        } else {
            res.json("noRegister");
            console.log("No estás registrado en la bd")
        }
    }


}


/**
     * Valida que el dni introducido por el usuario es real, utilizando el algoritmo de la policía
     * @param {string} dni - La informacion que recibe del formulario de registro
     * @return {string} letra - Devuelve la letra que correspondería según el algoritmo policial al número de dni introducido para comprobar si es correcto.
     */

function validationFormat(dni) {
    dni = dni.toUpperCase();
    var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    var nums = parseInt(dni.substring(0, dni.length - 1));
    var letra = letras[nums % letras.length]; // [nums % letras.length] = posicion de la letra del array de la policia
    return letra == dni[8];
}
/**
     * Deja el dni con el formato que necesitamos para nuestra base de datos
     * @param {string} dni - La informacion que recibe del formulario de registro
     * @return {string} conGuion - Devuelve el dni que nos ha introducido el usuario sin el guion, si lo tuviera, para que tenga el formato que necesitamos.
     */

function quitarGuion(dni) {
    var conGuion = dni.split("-");
    if (conGuion.length == 1) {
        return dni;
    } else {
        return conGuion[0] + conGuion[1];
    }
}
/**
     * Recoge el dni sin guion que hemos generado en la funciónm quitar guion y da ese valor a la variable dni que utilizaremos para el registro.
     * @param {string} dni - La informacion que recibe del dni sin guion de la función quitar guion
     * @return {string} dhi - Devuelve la variable dni con el nuevo valor asignado
     */

function validation_dni(dni) {
    dni = quitarGuion(dni);
    return validationFormat(dni);
}


module.exports = user //revisar el nombre para importarlo en las rutas