import * as Yup from "yup";
/**
 * crea y retornar un objeto de usuario para luego ser usado
 * en el registro de una nueva persona
 * @returns el objeto incial con sus respectivos valores
 */
export function initialValues() {
  return {
    email: "",
    password: "",
    username: "",
  };
}

/**
 * Valida los campos del esquema para un usuarios para que corresponda
 * con su respectivo dato como lo es email, que password tenga como
 * minimo 6 caracteres y el user name que sea string, todos son
 * requeridos para que el formulario sea valido
 * @returns retorna las validaciones de todos los campos
 */

export function validatioSchema() {
  return Yup.object({
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true).min(6, "Minimo 6 caracteres"),
    username: Yup.string().required(true),
  });
}
