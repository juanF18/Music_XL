import React from "react";
import { useFormik } from "formik";
import { Form, Icon } from "semantic-ui-react";
import { initialValues, validatioSchema } from "./RegisterForm.data";
import "./RegisterForm.scss";

export function RegisterForm(props) {
  //Recuperacion en props de las funciones de ir al login
  // y de ir a la pagina incial
  const { openLogin, goBack } = props;

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
    onSubmit: (formValue) => {
      console.log("Registro OK");
      console.log(formValue);
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
          type="password"
          placeholder="Contraseña"
          icon={
            <Icon
              name="eye"
              link
              onClick={() => console.log("show password")}
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
        <Form.Button type="submit" primary fluid>
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
