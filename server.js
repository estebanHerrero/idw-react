// server.js
import express from "express";
import mongoose from "mongoose";
import alojamientoRoutes from "./routes/alojamiento.js";
import cors from "cors";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Database connection
mongoose
  .connect("mongodb://localhost:27017/tu_basedatos", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

// Define routes
app.use("/api/alojamientos", alojamientoRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("¡Hola! Este es el servidor de mi aplicación.");
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
