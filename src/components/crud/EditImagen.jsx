// src/components/crud/EditImages.jsx
import React, { useState } from "react";
import axios from "axios";

const EditImages = ({ images, alojamientoId, onUpdateImages }) => {
  const [newImage, setNewImage] = useState("");

  const handleAddImage = () => {
    axios
      .put(`/api/alojamientos/addAlojamientoImage/${alojamientoId}`, {
        image: newImage,
      })
      .then((response) => onUpdateImages(response.data.images))
      .catch((error) => console.error(error));
    setNewImage("");
  };

  const handleDeleteImage = (image) => {
    axios
      .put(`/api/alojamientos/deleteAlojamientoImage/${alojamientoId}`, {
        image,
      })
      .then((response) => onUpdateImages(response.data.images))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h3>Edit Images</h3>
      <ul>
        {images.map((image, index) => (
          <li key={index}>
            <img src={image} alt={`Alojamiento ${index}`} width="100" />
            <button onClick={() => handleDeleteImage(image)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newImage}
          onChange={(e) => setNewImage(e.target.value)}
        />
        <button onClick={handleAddImage}>Add Image</button>
      </div>
    </div>
  );
};

export default EditImages;
