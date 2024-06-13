import React, { useState } from "react";

const ComentariosValoraciones = () => {
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState("");
  const [valoracion, setValoracion] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevo = { comentario: nuevoComentario, valoracion };
    setComentarios([...comentarios, nuevo]);

    setNuevoComentario("");
    setValoracion(1);
  };

  return (
    <div>
      <h2>Comentarios y Valoraciones</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={nuevoComentario}
          onChange={(e) => setNuevoComentario(e.target.value)}
          placeholder="Escribe tu comentario"
        />
        <br />
        <label>
          Valoración:
          <select
            value={valoracion}
            onChange={(e) => setValoracion(e.target.value)}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </label>
        <br />
        <button type="submit">Agregar Comentario</button>
      </form>
      <ul>
        {comentarios.map((comentario, index) => (
          <li key={index}>
            {comentario.comentario} - Valoración: {comentario.valoracion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComentariosValoraciones;
