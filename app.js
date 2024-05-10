const config = require("./utils/config");
const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("./utils/logger");

require("express-async-errors");
const blogRouter = require("./controllers/blogRoutes");
const ctMiddleware = require("./utils/middleware");

// ----------------------------------------------------------------------------------------
// Database MongoDB
// Responsibility of establishing the connection to the database  -------------------------
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
logger.info("connecting to", config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info("connected to MongoDB");
  })
  .catch((error) => {
    logger.error(
      "error connecting to MongoDB:",
      error.message,
    );
  });
// ----------------------------------------------------------------------------------------

app.use(cors());
app.use(express.json());

app.use(ctMiddleware.requestLogger);

// Routing handling
app.use("/api/blogs", blogRouter);

app.use(ctMiddleware.unknownEndpoint);
app.use(ctMiddleware.errorHandler);

module.exports = app;
