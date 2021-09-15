const { Router } = require("express");

const router = Router();

const Home = require("../models/Home");

router.get("/houses", async (req, res) => {
  const candidate = await Home.find().sort({ $natural: -1 }).limit(8);
  res.json(candidate);
});

router.get("/myhome/:_id", async (req, res) => {
  try {
    const id = req.params;
    const homedate = await Home.find(id);
    res.json(homedate);
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
  }
});

module.exports = router;
