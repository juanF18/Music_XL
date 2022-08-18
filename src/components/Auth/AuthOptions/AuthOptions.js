import React from "react";
import { Button } from "semantic-ui-react";
import "./AuthOptions.scss";

export function AuthOptions(props) {
  /**
   * Recuperacion por props las funciones
   * para moverse entre los distintos formularios
   */
  const { openLogin, openRegister } = props;
  return (
    <div className="auth-options">
      <h1>Millones de canciones gratis!!</h1>

      <Button className="register" onClick={openRegister}>
        Registrate ahora
      </Button>
      <Button className="login" onClick={openLogin}>
        Inicia sesion
      </Button>
    </div>
  );
}
