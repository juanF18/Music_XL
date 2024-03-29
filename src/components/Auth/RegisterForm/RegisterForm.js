import React, { useState } from "react";
import { useFormik } from "formik";
import { Form, Icon } from "semantic-ui-react";
import { initialValues, validatioSchema } from "./RegisterForm.data";
import { Auth } from "../../../api";
import "./RegisterForm.scss";

/**
 * Creacion de un nuevo Objeto Auth para registrar
 *  un usuario
 */
const auth = new Auth();

export function RegisterForm(props) {
  //Recuperacion en props de las funciones de ir al login
  // y de ir a la pagina incial
  const { openLogin, goBack } = props;

  const [showPassword, setShowPassword] = useState(false);
  /**
   * Funcion para cambiar el valor del estado actual
   * a su negado para poder cambiar el icono y si se
   * puede ver la password o no
   * Nota (no necesariamete se tiene que llamar estado anterior)
   * @returns retorna la negacion del estado de showPassword
   */
  const onShowHidenPassword = () => setShowPassword((prevState) => !prevState);

  /**
   * formik hacer un control de los campos de valores
   * en el formulario y los maneja con un onChange
   * y onSubmit en los Form.Input y en Form
   * respectivament, tambien le agregamos un validacion
   * para que los datos que se manden sean correctos
   */
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validatioSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await auth.register(formValue.email, formValue.password);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="register-form">
      <h1>Empieza a difrutar con Music XL</h1>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Input
          name="email"
          type="text"
          placeholder="Correo electronico"
          icon="mail outline"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.errors.email}
        />
        <Form.Input
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Contraseña"
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
        <Form.Input
          name="username"
          type="text"
          placeholder="Como deberiamos llamarte?"
          icon="user circle outline"
          onChange={formik.handleChange}
          value={formik.values.username}
          error={formik.errors.username}
        />
        <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
          Continuar
        </Form.Button>
      </Form>
      <div className="register-form__options">
        <p onClick={goBack}>Volver</p>
        <p>
          Ya tienes Music XL <span onClick={openLogin}>Inicar sesion</span>
        </p>
      </div>
    </div>
  );
}
