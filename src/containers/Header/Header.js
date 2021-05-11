import { Link } from "react-router-dom";

import "./Header.scss";

import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  window.addEventListener("scroll", () => {
    const Header = document.querySelector(".header");
    if (window.scrollY > 95) {
      Header.style.background = "#D6DFEE";
      document.getElementById("header-links").classList.add("color-header");
      document.getElementById("languages").classList.add("scrolheader");
    } else {
      Header.style.background = "transparent";
      document.getElementById("header-links").classList.remove("color-header");
      document.getElementById("languages").classList.remove("scrolheader");
    }
  });

  function BurgerButton() {
    const menuWrapper = document.querySelector("#menu-mobile");
    menuWrapper.classList.toggle("active");
    document.getElementById("body").classList.toggle("no-scrol");
    document.getElementById("burger-icon").classList.toggle("none");
  }

  function ClosseBurgerMenu() {
    const menuWrapper = document.querySelector("#menu-mobile");
    menuWrapper.classList.remove("active");
    document.getElementById("body").classList.remove("no-scrol");
    document.getElementById("burger-icon").classList.remove("none");
  }

  const HandleLanguageChanger = (lang) => {
    i18n.changeLanguage(lang);
    console.log(lang);
  };

  return (
    <header className="header">
      <div className="header-inner container">
        <Link to={`/`} className="header-inner-left">
          {/* <img src="" alt="logo" className="header-inner-left-logo"/> */}
          Translators.uz
        </Link>

        <div className="menu-mobile " id="menu-mobile">
          <nav className="header-inner-nav">
            <ul className="header-inner-nav-inner" id="header-links">
              <li className="header-inner-nav-inner-item">
                <Link
                  to="/"
                  className="header-inner-nav-inner-item__link"
                  onClick={ClosseBurgerMenu}
                >
                  {t("sidebar.home")}
                </Link>
              </li>
              <li className="header-inner-nav-inner-item">
                <Link
                  to="/about-us"
                  className="header-inner-nav-inner-item__link"
                  onClick={ClosseBurgerMenu}
                >
                  {t("sidebar.about_us")}
                </Link>
              </li>
              <li className="header-inner-nav-inner-item">
                <Link
                  to="/services"
                  className="header-inner-nav-inner-item__link"
                  onClick={ClosseBurgerMenu}
                >
                  {t("sidebar.services")}
                </Link>
              </li>
              <li
                className="header-inner-nav-inner-item"
                onClick={ClosseBurgerMenu}
              >
                <Link to="/team" className="header-inner-nav-inner-item__link">
                  {t("sidebar.team")}
                </Link>
              </li>
              <li className="header-inner-nav-inner-item">
                <Link
                  to="/contacts"
                  className="header-inner-nav-inner-item__link"
                  onClick={ClosseBurgerMenu}
                >
                  {t("sidebar.contacts")}
                </Link>
              </li>
            </ul>
          </nav>

          <div className="header-inner-links" id="languages">
            <button
              className="header-inner-links__button"
              onClick={() => HandleLanguageChanger("en")}
              name="eng"
              id="eng"
            >
              ENG
            </button>
            <button
              className="header-inner-links__button"
              onClick={() => HandleLanguageChanger("ru")}
              name="ru"
              id="ru"
            >
              RU
            </button>
          </div>
        </div>

        <div className="burger-menu" onClick={BurgerButton}>
          <div id="burger-icon">
            <svg
              width="20"
              height="17"
              viewBox="0 0 20 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="20" height="3" fill="white" />
              <rect y="7" width="20" height="3" fill="white" />
              <rect y="14" width="20" height="3" fill="white" />
            </svg>
          </div>
          <div id="closs-icon">
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.99989 6.37869L2.98948 0.368286L0.868164 2.48961L6.87857 8.50001L0.868164 14.5104L2.98948 16.6317L8.99989 10.6213L15.0103 16.6317L17.1316 14.5104L11.1212 8.50001L17.1316 2.48961L15.0103 0.368286L8.99989 6.37869Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
