const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const LocalStrategy = require("passport-local");
//

//
const Usuario = require("./models/usuario");
const app = express();
const port = 4000;
//

//passport y session
app.use(
  session({
    secret: "404",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 24 * 7,
    },
    httpOnly: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(Usuario.authenticate()));

passport.serializeUser(Usuario.serializeUser());
passport.deserializeUser(Usuario.deserializeUser());
//passport y session

//
const routerUsuarios = require("./routes/usuarios.js");
const routerComentarios = require("./routes/comentarios.js");
const routerCategorias = require("./routes/categorias.js");
const routerPublicaciones = require("./routes/publicaciones.js");
//

//
const bodyParser = require("body-parser");
//

//
mongoose.connect("mongodb://127.0.0.1:27017/proyecto-ML-express", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Conectado a la base de datos");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
//

//rutas
app.use("/usuarios", routerUsuarios);
app.use("/comentarios", routerComentarios);
app.use("/categorias", routerCategorias);
app.use("/publicaciones", routerPublicaciones);
//rutas

//error hadler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
//error hadler

app.listen(port, () => {
  console.log(`El servidor esta corriendo en http://localhost:${port}`);
});
