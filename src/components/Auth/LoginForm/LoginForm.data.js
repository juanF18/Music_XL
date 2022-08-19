import * as Yup from "yup";

/**
 *
 * @returns retorna el objeto requerido para el registo
 * con los valores iniciales
 */

export function initialValues() {
  return {
    email: "",
    password: "",
  };
}

/**
 *
 * @returns retorna la validacion del objeto anteterio,
 * osea que el email si sea email y que este presete
 * y que exista la password
 */
export function validationSchema() {
  return Yup.object({
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true),
  });
}
