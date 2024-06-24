// routes/alojamiento.js
import express from "express";
import {
  getAlojamientoServicios,
  updateAlojamiento,
  deleteAlojamientoImage,
  addAlojamientoImage,
} from "../controllers/AlojamientoController.js";

const router = express.Router();

// Ruta para obtener los servicios de un alojamiento por ID
router.get("/getAlojamientoServicios/:idAlojamiento", getAlojamientoServicios);

// Ruta para actualizar los datos de un alojamiento, incluyendo las imágenes
router.put("/updateAlojamiento/:idAlojamiento", updateAlojamiento);

// Ruta para eliminar una imagen de un alojamiento
router.put("/deleteAlojamientoImage/:idAlojamiento", deleteAlojamientoImage);

// Ruta para agregar una imagen a un alojamiento
router.put("/addAlojamientoImage/:idAlojamiento", addAlojamientoImage);

export default router;
