import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import "./header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header">
      <div className="header__container-title-and-nav">
        <div className="header__wrapper">
          <h2 className="header__title">NewsExplorer</h2>
          {!showMenu ? (
            <GiHamburgerMenu
              color="white"
              className={`header__menu-button`}
              onClick={() => setShowMenu(true)}
            />
          ) : (
            <IoClose
              color="white"
              className={`header__menu-button header__menu-button_close`}
              onClick={() => setShowMenu(false)}
            />
          )}
        </div>
        {showMenu ? (
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__list-item">
                <a href="/" className="header__link">
                  Home
                </a>
              </li>
              <li className="header__list-item">
                <button className="header__signin-button">Entrar</button>
              </li>
            </ul>
          </nav>
        ) : null}
      </div>
      <div className="header__hero">
        <h1 className="header__hero-title">O que está acontecendo no mundo?</h1>
        <p className="header__hero-paragraph">
          Encontre as últimas notícias sobre qualquer tema e salve elas em sua
          conta pessoal
        </p>
        <form className="header__form">
          <input
            type="text"
            placeholder="Natureza"
            className="header__form-input"
          />
          <button className="header__form-button" type="submit">
            Procurar
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
