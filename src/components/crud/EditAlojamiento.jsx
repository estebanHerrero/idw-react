import React, { useState, useEffect } from "react";
import axios from "axios";
import EditImages from "./crud/EditImages";

const EditAlojamiento = ({ alojamientoId }) => {
  const [alojamiento, setAlojamiento] = useState(null);

  useEffect(() => {
    axios
      .get(`/getAlojamientoServicios/${alojamientoId}`)
      .then((response) => setAlojamiento(response.data))
      .catch((error) => console.error(error));
  }, [alojamientoId]);

  const handleUpdateImages = (updatedImages) => {
    setAlojamiento({ ...alojamiento, images: updatedImages });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`/updateAlojamiento/${alojamientoId}`, alojamiento)
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  };

  if (!alojamiento) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Alojamiento</h2>
      <label>
        Name:
        <input
          type="text"
          value={alojamiento.name}
          onChange={(e) =>
            setAlojamiento({ ...alojamiento, name: e.target.value })
          }
        />
      </label>
      <EditImages
        images={alojamiento.images}
        onUpdateImages={handleUpdateImages}
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditAlojamiento;
