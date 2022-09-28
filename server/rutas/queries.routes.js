const { Router } = require("express");
const albums = require("../modelo/bd");
let router = Router();

router.get("/albums", async (req, res) => {
  try {
    const albumList = await albums.find() 
    res.send(albumList) 
  } catch (error) {
    console.log(error);
  }
});

router.post("/createalbum", async (req, res) => {
  try {
    const { nombre, temas, año } = req.body;
    const createA = new albums({ nombre, temas, año });
    await createA.save();
    res.json(createA);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
