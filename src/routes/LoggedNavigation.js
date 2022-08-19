import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoggedLayout } from "../layouts";
import { Album, Albums, Artist, Artists, Home, Profile } from "../pages";

/**
 * Componente de navegacion entre pantallas o componentes
 * usando react-router-dom v6
 * @returns los componentes segun el path en el que estemos
 */
export function LoggedNavigation() {
  //el parametro :id va a llegar con la clave id y el valor va a ser dinamco
  /**
   * Al usar logged layout no van a funcionar los componentes que hay dentro
   * por lo tanto al ver los props que llegan a LoggedLayout se ve que le llega
   * un children entonces lo ponemos en el render como {children}
   */
  return (
    <BrowserRouter>
      <LoggedLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artists/:id" element={<Artist />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/albums:id" element={<Album />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </LoggedLayout>
    </BrowserRouter>
  );
}
