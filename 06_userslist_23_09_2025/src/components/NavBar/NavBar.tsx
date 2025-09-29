import type { JSX } from "react";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export default function NavBar(): JSX.Element {
  return (
    <nav className={style.navigation}>
      <ul className={style.list}>
        <li className={style.listElement}>
            <NavLink to="/home" className={style.link}>Домашняя страница</NavLink>
        </li>
        <li className={style.listElement}>
            <NavLink to="/users" className={style.link}>Пользователи</NavLink>
        </li>
        <li className={style.listElement}>
            <NavLink to="/comments" className={style.link}>Комментарии</NavLink>
        </li>
        <li className={style.listElement}>
            <NavLink to="/posts" className={style.link}>Посты</NavLink>
        </li>
      </ul>
    </nav>
  );
}