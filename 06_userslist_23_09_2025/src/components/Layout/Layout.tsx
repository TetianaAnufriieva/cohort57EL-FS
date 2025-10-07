import { useState, type JSX } from "react";
import NavBar from "../NavBar/NavBar";
import style from "./Layout.module.css";
import { Outlet } from "react-router-dom";

export default function Layout(): JSX.Element {
  return (
    <div className={style.appLayout}>
      <NavBar />
      <main className={style.mainContent}>
        <Outlet />
        {/* - это компонент-контейнер, в котором отрисовывуется компонент, на который мы нажали */}
      </main>
      <footer className={style.footer_container}>
        Anufriieva Tetiana, Cohort 57-EL-FS ©
      </footer>
    </div>
  );
}
