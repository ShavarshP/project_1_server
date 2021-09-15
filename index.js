const express = require("express");
const cors = require("cors");
const config = require("config");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

// app.use("/api", require("./routes/newDataRouter"));
// app.use("/api", require("./routes/setData"));
// app.use("/api", require("./routes/getDataList"));
//shavarsh350700 papoyan350700?

const PORT = 5000;
async function start() {
  try {
    await mongoose.connect(config.get("mongoUrl"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    app.listen(process.env.PORT || PORT, () =>
      console.log(`App has been started on portt ${PORT}...`)
    );
  } catch (e) {
    console.log("Serverr Error", e.message);
    process.exit(1);
  }
}

start();
