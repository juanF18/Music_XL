import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import "./LeftMenu.scss";

export function LeftMenu() {
  const { pathname } = useLocation();

  const isCurrentPage = (route) => {
    return route === pathname;
  };

  return (
    <div className="left-menu">
      <Menu secondary vertical fluid>
        <Menu.Item
          as={Link}
          to="/"
          name="Inicio"
          icon="home"
          active={isCurrentPage("/")}
        />
        <Menu.Item
          as={Link}
          to="/artists"
          name="Artistas"
          icon="users"
          active={isCurrentPage("/artists")}
        />
        <Menu.Item
          as={Link}
          to="/albums"
          name="Albumes"
          icon="window maximize outline"
          active={isCurrentPage("/albums")}
        />
      </Menu>

      <Menu secondary vertical fluid>
        <Menu.Item
          name="Nueva cancion"
          icon="plus"
          link
          onClick={() => console.log("Subir cancion")}
        />
        <Menu.Item
          name="Nuevo Album"
          icon="plus"
          link
          onClick={() => console.log("Crear album")}
        />
        <Menu.Item
          name="Nuevo Artista"
          icon="plus"
          link
          onClick={() => console.log("Crear artista")}
        />
      </Menu>
    </div>
  );
}
