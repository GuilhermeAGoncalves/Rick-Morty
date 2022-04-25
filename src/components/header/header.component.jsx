import React from "react";
import { Link } from "react-router-dom";
import css from "./header.style.module.css";

function Header() {
  return (
    <header className={css.header}>
      <h1 className={css.title}>Rick e Morty</h1>
      <nav>
        <Link className={css.link} to="/locations">
          Locais
        </Link>
        <Link className={css.link} to="/">
          Personagens
        </Link>
        <Link className={css.link} to="/episodes">
          Episodios
        </Link>
      </nav>
    </header>
  );
}

export default Header;
