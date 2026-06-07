const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {

  const authHeader =
    req.headers.authorization;

  console.log("AUTH HEADER:");//Remove it after testing, it's for debugging
  console.log(authHeader);//Remove it after testing, it's for debugging purposes only

  if (!authHeader) {
    return res.status(401).json({
      message: "Access denied",
    });
  }

  const token =
    authHeader.split(" ")[1];

  console.log("TOKEN:");//Remove it after testing, it's for debugging
  console.log(token);//Remove it after testing, it's for debugging

  try {

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    console.log("SUCCESS:", decoded);//Remove it after testing, it's for debugging

    req.user = decoded;

    next();

  } catch (error) {

    console.log("ERROR:");//Remove it after testing, it's for debugging
    console.log(error.message);//Remove it after testing, it's for debugging

    return res.status(403).json({
      message: "Invalid token",
      error: error.message,
    });
  }
};
console.log(
  "VERIFY SECRET:",
  process.env.JWT_SECRET
);//Remove it after testing, it's for debugging

module.exports = verifyToken;