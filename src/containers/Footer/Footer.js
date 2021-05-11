import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./Footer.scss";

const Footer = () => {
  const [y] = useTranslation();
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-inner-left">
          <div className="footer-inner-left-first">
            <Link to={`/`} className="footer-inner-left-first__logo">
              Translators.uz
            </Link>

            <div className="footer-inner-left-first-links">
              <Link
                to="/about-us"
                className="footer-inner-left-first-links__item"
              >
                {y("sidebar.about_us")}
              </Link>
              <Link
                to="/services"
                className="footer-inner-left-first-links__item"
              >
                {" "}
                {y("sidebar.services")}
              </Link>
            </div>
          </div>

          <div className="footer-inner-left-second">
            <a href="tel:935805259" className="footer-inner-left-second__link">
              {y("sidebar.call_us")}: +998935805259
            </a>
            <a
              href="mailto:translatorsuzbekistan@gmail.com"
              className="footer-inner-left-second__link"
            >
              translatorsuzbekistan@gmail.com
            </a>
          </div>
        </div>

        <div className="footer-inner-right">
          <div className="footer-inner-right-targer">
            <a
              href="https://www.facebook.com/translators.uz"
              target="blabk"
              className="footer-inner-right-targer__link"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"
                  fill="#fff"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/translators.uz/"
              target="blabk"
              className="footer-inner-right-targer__link"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"
                  fill="#FFF"
                />
                <path
                  d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                  fill="#FFF"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                  fill="#FFF"
                />
              </svg>
            </a>
            <a
              href="http://linkedin.com/in/lobar-obidova-a333a7196"
              target="_blank"
              rel="noreferrer"
              className="footer-inner-right-targer__link"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 46 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M45.9259 47.095V47.0931H45.9373V29.9247C45.9373 21.5258 44.1791 15.0559 34.6315 15.0559C30.0417 15.0559 26.9616 17.6462 25.7041 20.1019H25.5714V15.84H16.5188V47.0931H25.945V31.6177C25.945 27.5431 26.6961 23.603 31.6026 23.603C36.4371 23.603 36.5092 28.2531 36.5092 31.8791V47.095H45.9259Z"
                  fill="white"
                />
                <path
                  d="M1.16943 15.8419H10.607V47.0949H1.16943V15.8419Z"
                  fill="white"
                />
                <path
                  d="M5.88441 0.282715C2.86688 0.282715 0.418335 2.80082 0.418335 5.90409C0.418335 9.00735 2.86688 11.5781 5.88441 11.5781C8.90194 11.5781 11.3505 9.00735 11.3505 5.90409C11.3486 2.80082 8.90004 0.282715 5.88441 0.282715V0.282715Z"
                  fill="white"
                />
              </svg>
            </a>

            <a
              href="#hero"
              target="_blank"
              className="footer-inner-right-targer__link"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 22 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 0.375C4.92339 0.375 0 5.57812 0 12C0 18.4219 4.92339 23.625 11 23.625C17.0766 23.625 22 18.4219 22 12C22 5.57812 17.0766 0.375 11 0.375ZM16.4024 8.33906L14.5972 17.3297C14.4641 17.9672 14.1048 18.1219 13.6036 17.8219L10.8536 15.6797L9.52742 17.0297C9.38105 17.1844 9.25686 17.3156 8.97298 17.3156L9.16815 14.3578L14.2645 9.49219C14.4863 9.28594 14.2157 9.16875 13.923 9.375L7.6246 13.5656L4.91008 12.6703C4.32016 12.4734 4.30685 12.0469 5.03427 11.7469L15.6395 7.425C16.1319 7.2375 16.5621 7.55156 16.4024 8.33906Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>

          <span className="footer-inner-right__reserved">
            Copyright 2021. {y("copyright")}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
