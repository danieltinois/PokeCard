import React from "react";
import styles from "./navBar.module.scss";

const NavBar = () => {
  const logoPokeApi =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav className="navbar bg-body-tertiary bg-warning shadow p-3 mb-5 bg-body-tertiary rounded">
      <div className="container-fluid">
        <div className={styles.mainMenu}>
          <a href="#">
            <img
              className={styles.ImgLogoApi}
              src={logoPokeApi}
              alt="LogoPokemonApi"
            />
          </a>

          <ul>
            <button className={styles.btnUl}>
              <li>Home</li>
            </button>
            <button className={styles.btnUl}>
              <li>Perfil</li>
            </button>
          </ul>
        </div>

        <button
          className="navbar-toggler border-dark"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end bg-warning"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Configurações
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body ">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Perfil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Register
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Suporte
                </a>
              </li>
            </ul>
            <img className={styles.logoApi} src={logoPokeApi} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
