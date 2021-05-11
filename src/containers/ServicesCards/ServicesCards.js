import { Link } from "react-router-dom";

import "./ServicesCards.scss";

import cardIcon1 from "../../assets/images/icon/icon-bottom-card1.png";
import cardIcon2 from "../../assets/images/icons/icons-translator-consecutive.png";
import cardIcon3 from "../../assets/images/icons/icons-guide.png";
import cardIcon4 from "../../assets/images/icons/icons-whispering.png";
import cardIcon5 from "../../assets/images/icons/icons-phone.png";
import { useTranslation } from "react-i18next";

const ServicesCards = ({ LinkText, iconArrow }) => {
  const [t] = useTranslation();
  return (
    <section className="services-card container">
      <p className="services-card__suptitle">{t("services.title")}</p>
      <h2 className="services-card__title">{t("services.core")}</h2>
      <p className="services-card__subtitle">{t("services.subtitle")}</p>

      <div className="services-card-wrapper">
        <div className="services-card-wrapper-item">
          <div className="services-card-wrapper-item-icon">
            <img src={cardIcon1} alt="img" width="60" height="60" />
          </div>

          <h4 className="services-card-wrapper-item__title">
            {t("services.1.title")}
          </h4>
          <p className="services-card-wrapper-item__subtitle">
            {t("services.1.text")}
          </p>
          <Link to={`/services`} className="services-card-wrapper-item__link">
            {LinkText}
            <span className="services-card-wrapper-item__link-icon">
              {iconArrow}
            </span>
          </Link>
        </div>

        <div className="services-card-wrapper-item">
          <div className="services-card-wrapper-item-icon">
            <img src={cardIcon2} alt="img" width="60" height="60" />
          </div>

          <h4 className="services-card-wrapper-item__title">
            {t("services.2.title")}
          </h4>
          <p className="services-card-wrapper-item__subtitle">
            {t("services.2.text")}
          </p>
          <Link to={`/services`} className="services-card-wrapper-item__link">
            {LinkText}
            <span className="services-card-wrapper-item__link-icon">
              {iconArrow}
            </span>
          </Link>
        </div>

        <div className="services-card-wrapper-item">
          <div className="services-card-wrapper-item-icon">
            <img src={cardIcon3} alt="img" width="60" height="60" />
          </div>

          <h4 className="services-card-wrapper-item__title">
            {t("services.3.title")}
          </h4>
          <p className="services-card-wrapper-item__subtitle">
            {t("services.3.text")}
          </p>
          <Link to={`/services`} className="services-card-wrapper-item__link">
            {LinkText}
            <span className="services-card-wrapper-item__link-icon">
              {iconArrow}
            </span>
          </Link>
        </div>

        <div className="top">
          <div className="services-card-wrapper-item">
            <div className="services-card-wrapper-item-icon">
              <img src={cardIcon4} alt="img" width="60" height="60" />
            </div>

            <h4 className="services-card-wrapper-item__title">
              {t("services.4.title")}
            </h4>
            <p className="services-card-wrapper-item__subtitle">
              {t("services.4.text")}
            </p>
            <Link to={`/services`} className="services-card-wrapper-item__link">
              {LinkText}
              <span className="services-card-wrapper-item__link-icon">
                {iconArrow}
              </span>
            </Link>
          </div>

          <div className="services-card-wrapper-item">
            <div className="services-card-wrapper-item-icon">
              <img src={cardIcon5} alt="img" width="60" height="60" />
            </div>

            <h4 className="services-card-wrapper-item__title ">
              {t("services.5.title")}
            </h4>
            <p className="services-card-wrapper-item__subtitle">
              {t("services.5.text")}
            </p>
            <Link to={`/services`} className="services-card-wrapper-item__link">
              {LinkText}
              <span className="services-card-wrapper-item__link-icon">
                {iconArrow}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;
