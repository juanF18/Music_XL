import React, { useState } from "react";
import { Form, Icon } from "semantic-ui-react";
import "./LoginForm.scss";

export function LoginForm(props) {
  const { openRegister, goBack } = props;
  const [showPassword, setShowPassword] = useState(false);

  const onShowHidenPassword = () => setShowPassword((prevState) => !prevState);
  return (
    <div className="login-form">
      <h1>Musica para ti</h1>

      <Form>
        <Form.Input
          name="email"
          type="text"
          placeholder="Correo electronio"
          icon="mail outline"
        />

        <Form.Input
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          icon={
            <Icon
              name={showPassword ? "eye slash" : "eye"}
              link
              onClick={onShowHidenPassword}
            />
          }
        />

        <Form.Button type="submit" primary fluid>
          Iniciar sesion.
        </Form.Button>
      </Form>

      <div className="login-form__options">
        <p onClick={goBack}>Volver</p>
        <p>
          Aun no tienes cuenta? <span onClick={openRegister}>Registrase</span>
        </p>
      </div>
    </div>
  );
}
