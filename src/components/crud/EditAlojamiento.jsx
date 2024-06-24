// src/components/crud/EditAlojamiento.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import EditImages from "./EditImages";

const EditAlojamiento = ({ alojamientoId }) => {
  const [alojamiento, setAlojamiento] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/alojamientos/getAlojamientoServicios/${alojamientoId}`)
      .then((response) => setAlojamiento(response.data))
      .catch((error) => console.error(error));
  }, [alojamientoId]);

  const handleUpdateImages = (updatedImages) => {
    setAlojamiento({ ...alojamiento, images: updatedImages });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`/api/alojamientos/updateAlojamiento/${alojamientoId}`, alojamiento)
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  };

  if (!alojamiento) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Alojamiento</h2>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={alojamiento.name}
          onChange={(e) =>
            setAlojamiento({ ...alojamiento, name: e.target.value })
          }
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          value={alojamiento.description}
          onChange={(e) =>
            setAlojamiento({ ...alojamiento, description: e.target.value })
          }
        ></textarea>
      </div>
      <EditImages
        images={alojamiento.images}
        alojamientoId={alojamientoId}
        onUpdateImages={handleUpdateImages}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditAlojamiento;
