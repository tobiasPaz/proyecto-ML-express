const Joi = require("joi");

const usuarioSchema = Joi.object({
  nombre: Joi.string().required(),
  apellido: Joi.string().required(),
  email: Joi.string().email().required(),
  publicaciones: Joi.array(),
  comentarios: Joi.array(),
  password: Joi.string(),
});

const edtUsuarioSchema = Joi.object({
  nombre: Joi.string().required(),
  apellido: Joi.string().required(),
  email: Joi.string().email().required(),
  publicaciones: Joi.array(),
  comentarios: Joi.array(),
  password: Joi.string(),
});

const publicacionSchema = Joi.object({
  titulo: Joi.string().required(),
  contenido: Joi.string().required(),
  autor: Joi.string().required(),
  categoria: Joi.string().required(),
  comentarios: Joi.array(),
});

const comentarioSchema = Joi.object({
  autor: Joi.string().required(),
  contenido: Joi.string().required(),
  puntuacion: Joi.number(),
  publicacion: Joi.string().required(),
});

const categoriasSchema = Joi.object({
  nombre: Joi.string().required(),
  publicaciones: Joi.array(),
});

module.exports = {
  usuarioSchema,
  publicacionSchema,
  comentarioSchema,
  categoriasSchema,
  edtUsuarioSchema,
};
