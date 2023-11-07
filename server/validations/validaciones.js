const {
  usuarioSchema,
  publicacionSchema,
  comentarioSchema,
  categoriasSchema,
} = require("./schemas");

// const validar = (schema) => (req, res, next) => {
//   const { error } = schema.validate(req.body);
//   if (error) {
//     const { details } = error;
//     const message = details.map((i) => i.message).join(",");
//     return res.status(422).json({ error: message });
//   }
//   next();
// };

const validarUsuario = (req, res, next) => {
  const { error } = usuarioSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

const validarPublicacion = (req, res, next) => {
  const { error } = publicacionSchema.validate(req.body);
  if (error) {
    const { details } = error;
    const message = details.map((i) => i.message).join(",");
    return res.status(422).json({ error: error.details[0].message });
  }
  next();
};

const validarComentario = (req, res, next) => {
  const { error } = comentarioSchema.validate(req.body);
  if (error) {
    const { details } = error;
    const message = details.map((i) => i.message).join(",");
    return res.status(422).json({ error: error.details[0].message });
  }
  next();
};

const validarCategoria = (req, res, next) => {
  const { error } = categoriasSchema.validate(req.body);
  if (error) {
    const { details } = error;
    const message = details.map((i) => i.message).join(",");
    return res.status(422).json({ error: error.details[0].message });
  }
  next();
};

module.exports = {
  validarUsuario,
  validarPublicacion,
  validarComentario,
  validarCategoria,
};
