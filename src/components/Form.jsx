import { useState, useEffect } from "react";
import "./Form.modules.css";

export function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [mensaje, setMensaje] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (name.length <= 5 || !email.includes("@")) {
      setError("Por favor verifique su información nuevamente");
      return;
    }
    setMensaje(`Gracias ${name}, te contactaremos cuanto antes vía ${email}`);
    setError("");
  }

  useEffect(() => {
    if (mensaje) {
      const timer = setTimeout(() => {
        setName("");
        setEmail("");
        setMensaje("");
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [mensaje]);

  return (
    <div>
      <form className="formulario" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          value={name}
          placeholder="Nombre"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="form-input"
          type="email"
          value={email}
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="form-button" type="submit">
          Enviar
        </button>
        {error && <p className="error">{error}</p>}
        {mensaje && <p className="enviado">{mensaje}</p>}
      </form>
    </div>
  );
}
