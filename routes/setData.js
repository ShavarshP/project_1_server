const { Router } = require("express");
const Home = require("../models/Home");
const router = Router();

// /api/auth/register
router.post("/add", async (req, res) => {
  try {
    console.log(req.body);
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
    console.log(req.body);
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
    console.log("maladec");
    res.status(201).json({ message: "Пользователь создан" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
  }
});

module.exports = router;
