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
    // var regExpCode = new RegExp(/\w{10}/);
    // var regExpName = new RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ]+$/u);
    // var regExpBirth = new RegExp(/^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/);
    // var regExpTlf = new RegExp(/+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/);

    //! Zona de validaciones

    // const codeOk = regExpCode.test(codigo);
    // const nameOk = regExpName.test(name);
    // const birthOk = regExpBirth.test(birth);
    // const tlfOk = regExpTlf.test(tlf);
    // const tlfOk = true;

    // var ok = codeOk && nameOk && birthOk && tlfOk;
    var ok = true;
    if (ok) {
      // const insertColiving = new colivingModel({
      //     code: "2",
      //     name: "Las Palomas",
      //     activity: [],
      //     place: "Las Palomas",
      //     price: "700",
      //     img: "http://www.ayto-fuenlabrada.es/recursos/img/TA/prehome/49677_2362362009102135.jpg"
      // })

      // insertColiving.save();

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
      console.log("no existe");
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

      /*
       */
    }
  },

  login: async (req, res) => {
    const { phone } = req.body;

    console.log(phone);

    const existUser = await userModel.findOne({ phone });

/*     console.log(existUser.idUser); */

    try {
      if (existUser != null) {
        payload = {
          id: existUser.idUser,
         
          location: "madrid"
        };
 

        const token = jwt.sign(payload, process.env.SECRET ,{expiresIn: "15m"});

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
    } catch (error) {}

    /*  const existUser = await userModel.findOne({ email });
    console.log(existUser);
    if (existUser) {
      if (existUser.password == password) {
        console.log(`Bienvenido ${existUser.name}`);
        // enviar al index
      } else {
        res.json("incorrectLogin");
        console.log("Incorrecto el password");
      }
    } else {
      res.json("noRegister");
      console.log("No estás registrado en la bd");
    } */
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

 console.log(req.userId)
    const users = await userModel.find({idUser: req.userId});
    res.json(
      {data: users,
        auth:true
      }
    );

   getOneUser: async (req, res) => {
    const user = await userModel.findOne();
    res.json(user);

  },
  saveActivity: (req, res) => {
    /*  let ob1 = {
      name: "Yoga",
      id_Category: 1,
      description: "Hacer yoga y estirar el cuerpo",
      sessions: [
        {
          numberSession: 1,
          members: [1, 2],
          date: "20-03-2022",
        },
        {
          numberSession: 2,
          members: [3, 4],
          date: "21-03-2022",
        },
        {
          numberSession: 3,
          members: [9, 8],
          date: "22-03-2022",
        },
      ],

      banner: "https://orpea.es/wp-content/uploads/2019/06/foto-yoga.jpg",
    }; */
    let ob2 = {
      name: "Bailes de salón",
      id_Category: 1,
      description: "Aprender diferentes estilos de baile de salón",
      sessions: [
        {
          numberSession: 1,
          members: [1, 2],
          date: "20-03-2022",
        },
        {
          numberSession: 2,
          members: [3, 4],
          date: "21-03-2022",
        },
        {
          numberSession: 3,
          members: [9, 8],
          date: "22-03-2022",
        },
      ],

      banner: "https://tumayoramigo.com/wp-content/uploads/2019/02/baile.jpg",
    };

    var saveActivity = new activitiesModel(ob2);

    saveActivity.save();

    /*  activitiesModel.save(ob1); */
  },
};

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

module.exports = user; //revisar el nombre para importarlo en las rutas
