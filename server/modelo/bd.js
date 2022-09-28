const { Schema, Model, now, model } = require("mongoose");

const beatlesAlbumSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    temas: [
      {
        titulo:{
          type: String,
          required: true,
          trim: true
        },
        duracion: {
          type: String,
          required: true,
          trim: true
        },

        compositor: {
          type: String,
          required: true,
          trim: true
        },
        letra: {
          type: String,
          trim: true
        }
      }
    ],
    año: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { versionKey: false }
);

module.exports = model("albums", beatlesAlbumSchema);
