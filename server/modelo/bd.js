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
        duracion: {
          type: String,
          required: true,
          trim: true,
        },

        compositor: {
          type: String,
          required: true,
          trim: true,
        },
        letra: {
          type: String,
          required: true,
          trim: true,
        },
      },
    ],
    año: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { versionKey: false }
);

module.exports = model("songs", beatlesSongsSchema);
