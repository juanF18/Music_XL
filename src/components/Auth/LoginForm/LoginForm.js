import React, { useState } from "react";
import { useFormik } from "formik";
import { Form, Icon } from "semantic-ui-react";
import { Auth } from "../../../api";
import { initialValues, validationSchema } from "./LoginForm.data";
import "./LoginForm.scss";

const auth = new Auth();

export function LoginForm(props) {
  const { openRegister, goBack } = props;
  const [showPassword, setShowPassword] = useState(false);

  const onShowHidenPassword = () => setShowPassword((prevState) => !prevState);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formvalue) => {
      try {
        auth.login(formvalue.email, formvalue.password);
      } catch (error) {
        console.error(error);
      }
    },
  });
  return (
    <div className="login-form">
      <h1>Musica para ti</h1>

      <Form onSubmit={formik.handleSubmit}>
        <Form.Input
          name="email"
          type="text"
          placeholder="Correo electronio"
          icon="mail outline"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.errors.email}
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
          onChange={formik.handleChange}
          value={formik.values.password}
          error={formik.errors.password}
        />

        <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
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
