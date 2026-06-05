const express = require("express");

const router = express.Router();

const verifyToken =
  require("../middleware/authMiddleware");

const {
  addToCart,
} = require("../controllers/cartController");

router.post(
  "/add",
  verifyToken,
  addToCart
);

module.exports = router;