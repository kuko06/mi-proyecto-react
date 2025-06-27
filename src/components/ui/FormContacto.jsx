import React, { useState } from "react";

export const FormContacto = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    setEnviado(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>CONTACTO</h3>
        <div className="input-box">
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
            placeholder="Nombre y apellido"
          />
        </div>
        <div className="input-box">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Correo electrónico"
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            name="asunto"
            value={form.asunto}
            onChange={handleChange}
            required
            placeholder="Asunto"
          />
        </div>
        <div className="input-box">
          <textarea
            name="mensaje"
            cols="40"
            rows="10"
            value={form.mensaje}
            onChange={handleChange}
            placeholder="Escribe tu mensaje"
          />
        </div>
        <button type="submit">Enviar mensaje</button>
      </form>

      {enviado && <p style={{ color: "green", marginTop: "10px" }}>Mensaje enviado, gracias!</p>}
    </>
  );
};