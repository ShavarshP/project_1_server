const { Router } = require("express");
const router = Router();

const Home = require("../models/home");

router.post("/add", async (req, res) => {
  try {
    const {
      sale,
      rent,
      search_code,
      category,
      district,
      building_type,
      rooms,
      price,
      floor,
      area,
      street,
      Mobile_number,
      description,
      img,
    } = req.body;

    const home = new Home({
      img: img,
      Mobile_number: Mobile_number,
      area: area,
      building_type: building_type,
      category: category,
      street: street,
      description: description,
      district: district,
      floor: floor,
      price: price,
      rent: rent,
      rooms: rooms,
      sale: sale,
      search_code: search_code,
      loc: "",
    });
    await home.save();
    res.status(201).json({ message: "data created" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Something went wrong, please try again" });
  }
});

module.exports = router;
