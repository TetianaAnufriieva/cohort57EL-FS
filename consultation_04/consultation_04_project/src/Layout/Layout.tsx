import type { JSX } from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";

export default function Layout(): JSX.Element {
  return (
    <div>
      <NavBar />
      <Outlet /> 
      {/* - это компонент-контейнер, в котором отрисовывуется компонент, на который мы нажали */}
      <footer>
        Здесь будет подвал
      </footer>
    </div>
  );
}
