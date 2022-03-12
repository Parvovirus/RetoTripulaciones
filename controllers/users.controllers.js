const mongoose = require("mongoose");
const userModel = require("../models/users.model");
const colivingModel = require("../models/coliving.model");
const activitiesModel = require("../models/activity.model");
const jwt = require("jsonwebtoken");

const user = {
  registro: async (req, res) => {
    const { code, name, tlf, birth } = req.body;

    const insertUser = new userModel({
      name,
      lastName,
      birth,
      tlf,
      population,
      photo,
      idCoHouse,
      role: 0,
    });

    insertUser.save();

    console.log(req.body);

    // ! Expresiones Regulares validaciones:
    // var regExpCode = new RegExp(/\w{9}/);
    // var regExpName = new RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ]+$/u);
    // var regExpTlf = new RegExp(/+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/);
    // var regExpBirth = new RegExp(/^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/);

    //! Zona de validaciones

    // const codeOk = regExpCode.test(codigo);
    // const nameOk = regExpName.test(name);
    // const birthOk = regExpBirth.test(birth);
    // const tlfOk = regExpTlf.test(tlf);
    // const tlfOk = true;

    // var ok = codeOk && nameOk && birthOk && tlfOk;
    var ok = true;
    if (ok) {
      
      const existColiving = await colivingModel.findOne({ code });
      if (existColiving) {
        const existUser = await userModel.findOne({ tlf });
        console.log(existUser);
        if (!existUser) {
          const insertUser = new userModel({
            name,
            lastName,
            birth,
            tlf,
            population,
            photo,
            idCoHouse,
            role: 0,
          });

          insertUser.save();
          res.json({ auth: true });
        } else {
          res.json({ auth: false });
          console.log("Existe el usuario");
        }
      } else {
        console.log("codigo Coliving no registrado");
      }
    } else {
      if (!nameOk) {
        res.json("incorrectFormatName");
      } else if (!codigoOk) {
        res.json("incorrectFormatCode");
      } else if (!birthOk) {
        res.json("incorrectFormatBirth");
      } else if (!tlfOk) {
        res.json("incorrectFormatTlf");
      }
    }
  },
  checkData: async (req, res) => {
    const { idCoHousing, nameUser, tlfUser, dateUser } = req.body;

    let splitDate = dateUser.split("/");

    const checkCoHousing = await colivingModel.find({
      idColiving: idCoHousing,
    });

    const checkNameUser = await userModel.find({ name: nameUser });

    const checkDate = splitDate[3] > 1972 ? false : true;
    /* 
    const checkExistUser = await userModel.find({phone: checkNameUser.phone}) */

    if (checkCoHousing == "") {
      res.json({ message: "No existe el co housing" });

    } else if (!checkNameUser) {
      res.json({ message: "No existe el usuario" });
    } else if (checkDate != true) {
      res.json({ message: "Fecha de usuario no válida" });
    } else {
      if (checkCoHousing != "") {
        const checkTlf = checkCoHousing[0].guiatlf.includes(tlfUser);

        if (checkTlf != true) {
          res.json({ message: "Número de teléfono no válido" });
        } else {
          res.json({ message: "Datos correctos", dataRegisterUser: req.body });
        }
      }

    }
  },

  login: async (req, res) => {
    const { phone } = req.body;

    const existUser = await userModel.findOne({ phone });

    try {
      if (existUser != null) {
        payload = {
          id: existUser.idUser,
          location: "madrid"
        };

        const token = jwt.sign(payload, process.env.SECRET);

        res.json({
          message: "Login Correcto",
          token,
          status: true,
        });
      } else {
        res.json({
          message: "El número que has introducido es erróneo",
          status: false,
        });
      }
    } catch (error) { }
  },

  search: async (req, res) => {
    const { population } = req.body;
    const existUser = await userModel.find({ population });
    res.json(existUser);
  },

  getUsers: async (req, res) => {
    console.log("llega");
    const users = await userModel.find();
    res.json(users);
  },

  dataUser: async (req, res) => {

    const users = await userModel.find({ idUser: req.userId });
    res.json(
      {
        data: users,
        auth: true
      }
    );
  },
  getOneUser: async (req, res) => {
    const user = await userModel.findOne();
    res.json(user);

  },
};

module.exports = user; 
