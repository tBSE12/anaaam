const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");
const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    // Get token from header
    const token = req.headers.authorization.split(" ")[1];

    // Verify token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      const error = new Error("User does not exist");
      error.status = StatusCodes.BAD_REQUEST;
      next(error);
    }

    req.user = user;

    next();
  } else {
    const error = new Error("Not authenticated");
    error.status = StatusCodes.UNAUTHORIZED;
    next(error);
  }
});

module.exports = { protect };
