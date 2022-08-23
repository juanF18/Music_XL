import React from "react";
import "./LoggedLayout.scss";
import { LeftMenu, TopBar } from "../../components/Layout";

export function LoggedLayout(props) {
  /**
   * recuperacionde props del children para poder ser renderizado
   * en la app, se tiene que poner de la forma
   *  {childre}
   */
  const { children } = props;
  return (
    <div className="logged-layout">
      <div className="logged-layout__content">
        <div className="logged-layout__left-menu">
          <LeftMenu />
        </div>

        <div className="logged-layout__children-content">
          <div className="logged-layout__top-bar">
            <TopBar />
          </div>
          <div>{children}</div>
        </div>
      </div>

      <div className="logged-layout__footer">
        <p>FOOTER</p>
      </div>
    </div>
  );
}
