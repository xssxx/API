const express = require("express");
const dotenv = require("dotenv");
// mongoose connect files
const connectDB = require("./config/db");
// route files
const bootcampsRoute = require("./routes/bootcampsRoute");

// Load env
dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();

const app = express();

// Use middleware
app.use(express.json());

// Routes
app.use("/api/v1/bootcamps/", bootcampsRoute);

// Listenning
const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT;

const server = app.listen(
  PORT,
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`)
);

// Handle error no need to use try catch
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close();
});
