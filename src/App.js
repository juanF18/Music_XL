import React, { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { LoggedNavigation } from "./routes";
import { Auth } from "./pages";

export default function App() {
  //Estado donde se almacena el usuario
  const [user, setUser] = useState(undefined);
  //Datos del usuario (si esta ya registrado)
  const auth = getAuth();

  //Nos dice si el ususario ya esta registrado o no
  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  //Si el usuario no existe no retorna nada
  if (user === undefined) return null;

  /*Si el usuario existe retorna la pagina de logeado, si no existe 
  nos lleva a la pagina para registrarse o logearse.*/
  return user ? <LoggedNavigation /> : <Auth />;
}
