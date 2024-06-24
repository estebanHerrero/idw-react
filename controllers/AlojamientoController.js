// controllers/AlojamientoController.js
import Alojamiento from "../models/AlojamientoModel.js";

// Obtener alojamiento por ID
export const getAlojamientoServicios = async (req, res) => {
  try {
    const alojamiento = await Alojamiento.findById(req.params.idAlojamiento);
    if (!alojamiento) {
      return res.status(404).send({ message: "Alojamiento no encontrado" });
    }
    res.send(alojamiento);
  } catch (error) {
    res.status(500).send({ message: "Error al obtener el alojamiento", error });
  }
};

// Actualizar alojamiento (incluyendo imágenes)
export const updateAlojamiento = async (req, res) => {
  try {
    const { name, description, images } = req.body;
    const alojamiento = await Alojamiento.findByIdAndUpdate(
      req.params.idAlojamiento,
      { name, description, images },
      { new: true }
    );
    if (!alojamiento) {
      return res.status(404).send({ message: "Alojamiento no encontrado" });
    }
    res.send(alojamiento);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error al actualizar el alojamiento", error });
  }
};

// Eliminar imagen de alojamiento
export const deleteAlojamientoImage = async (req, res) => {
  try {
    const { image } = req.body;
    const alojamiento = await Alojamiento.findById(req.params.idAlojamiento);
    if (!alojamiento) {
      return res.status(404).send({ message: "Alojamiento no encontrado" });
    }
    alojamiento.images = alojamiento.images.filter((img) => img !== image);
    await alojamiento.save();
    res.send(alojamiento);
  } catch (error) {
    res.status(500).send({ message: "Error al eliminar la imagen", error });
  }
};

// Agregar imagen a alojamiento
export const addAlojamientoImage = async (req, res) => {
  try {
    const { image } = req.body;
    const alojamiento = await Alojamiento.findById(req.params.idAlojamiento);
    if (!alojamiento) {
      return res.status(404).send({ message: "Alojamiento no encontrado" });
    }
    alojamiento.images.push(image);
    await alojamiento.save();
    res.send(alojamiento);
  } catch (error) {
    res.status(500).send({ message: "Error al agregar la imagen", error });
  }
};
