const express = require("express");
const connect = require("./src/configs/db");
const app = express();
app.use(express.json());
const productController = require("./src/controllers/product.controller");
app.use("/", productController);
app.listen(process.env.PORT || 5000, async () => {
  try {
    await connect();
    console.log("listnening on port 5000");
  } catch (err) {
    console.log("err", err.message);
  }
});
