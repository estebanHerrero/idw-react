import React, { useState } from "react";

const EditImages = ({ images, onUpdateImages }) => {
  const [newImage, setNewImage] = useState("");

  const handleAddImage = () => {
    if (newImage.trim() !== "") {
      onUpdateImages([...images, newImage]);
      setNewImage("");
    }
  };

  const handleRemoveImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    onUpdateImages(updatedImages);
  };

  return (
    <div>
      <h3>Edit Images</h3>
      <div>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Alojamiento ${index}`}
              style={{ width: "100px", height: "100px" }}
            />
            <button type="button" onClick={() => handleRemoveImage(index)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={newImage}
        onChange={(e) => setNewImage(e.target.value)}
        placeholder="Enter new image URL"
      />
      <button type="button" onClick={handleAddImage}>
        Add Image
      </button>
    </div>
  );
};

export default EditImages;
