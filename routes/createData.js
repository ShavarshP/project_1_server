const { Router } = require("express");
const router = Router();
// const Home = require("../models/story");

// router.get("/houses", async (req, res) => {
//   const candidate = await Home.find().sort({ $natural: -1 }).limit(8);
//   res.json(candidate);
// });

// router.get("/myhome/:_id", async (req, res) => {
//   try {
//     const id = req.params;
//     const homedate = await Home.find(id);
//     res.json(homedate);
//   } catch (e) {
//     res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
//   }
// });
router.get("/participants", async (req, res) => {
  try {
    res.json([
      { name: "Armine", type: "gerazancik" },
      { name: "Shavarsh", type: "maladec" },
      { name: "Artyom", type: "shaxmat" },
      { name: "Artur", type: "ft-t-t-t--t-t-t" },
    ]);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please try again" });
  }
});

module.exports = router;