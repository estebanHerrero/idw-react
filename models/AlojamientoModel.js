// models/alojamientoModel.js
import mongoose from "mongoose";

const alojamientoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  images: { type: [String], required: true },
});

const Alojamiento = mongoose.model("Alojamiento", alojamientoSchema);
export default Alojamiento;
