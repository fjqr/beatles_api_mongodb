const { Router } = require("express");
const songs = require("../modelo/bd");
let router = Router();

router.get("/", async (req, res) => {
  try {
    console.log("funciona");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
