import React, { useState } from "react";
import { Image } from "semantic-ui-react";
import { AuthOptions, LoginForm, RegisterForm } from "../../components/Auth";
import { logoNameWhite, backgroundAuth } from "../../assets";
import "./Auth.scss";

/**
 * Rutas para que se pueda navegar entre las diferentes paginas
 * para logearse o registrarse o la pagina de inicio
 * @returns retorna el respectivo componente para los usuarios
 * no logueados
 */
export function Auth() {
  const [typeForm, setTypeForm] = useState(null);

  /**
   * conjunto de 3 funciones para cambiar el estado y se pueda
   * navegar entre estos formularios.
   * @returns retorna el respectivo formulario sea para logeare
   * o para registrase
   */
  const openLogin = () => setTypeForm("login");
  const openRegister = () => setTypeForm("register");
  const goBack = () => setTypeForm(null);

  /**
   * funcion de rutas para los formularios de registro
   * donde se pasa por props la funcion de abrir register, login
   * o el auth
   * @returns retorn el componente que se va a renderizar
   */
  const renderForm = () => {
    if (typeForm === "login") {
      return <LoginForm openRegister={openRegister} goBack={goBack} />;
    } else if (typeForm === "register") {
      return <RegisterForm openLogin={openLogin} goBack={goBack} />;
    }
    return <AuthOptions openLogin={openLogin} openRegister={openRegister} />;
  };

  return (
    <div className="auth">
      <div className="auth__content">
        <Image
          src={logoNameWhite}
          alt="MusicXL"
          className="auth__content-logo"
        />
        {renderForm()}
      </div>
    </div>
  );
}
