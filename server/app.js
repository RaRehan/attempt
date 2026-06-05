require("dotenv").config();

const express = require("express");
const cors = require("cors");
const userRoutes =
  require("./routes/userRoutes");
const db = require("./config/db");
const authRoutes =
  require("./routes/authRoutes");
const cartRoutes =
  require("./routes/cartRoutes");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("KN Watches API Running");
});
app.use(
  "/api/users",
  userRoutes
);
app.use(
  "/api/cart",
  cartRoutes
);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const productRoutes =
  require("./routes/productRoutes");

  app.use(
  "/api/products",
  productRoutes
);

app.use(
  "/api/auth",
  authRoutes
);