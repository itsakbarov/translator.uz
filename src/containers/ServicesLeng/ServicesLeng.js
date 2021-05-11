import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "./ServicesLeng.scss";

const ServicesLeng = () => {
  const [t] = useTranslation();
  return (
    <section className="servicesleng container">
      <div className="servicesleng-left">
        <span className="servicesleng-left__suptitle">
          {t("languages.suptitle")}
        </span>
        <h4 className="servicesleng-left__title">{t("languages.title")}</h4>
        <p className="servicesleng-left__text">{t("languages.subtitle")}</p>
        <Link to={`/contacts`} className="servicesleng-left__button">
          {t("languages.get")}
        </Link>
      </div>
      <div className="servicesleng-right">
        <div className="servicesleng-right-left">
          <div className="servicesleng-right-left-card">
            <Link
              to={`/contacts`}
              className="servicesleng-right-left-card__title"
            >
              {t("languages.1.title")}
            </Link>
            <p className="servicesleng-right-left-card__text">
              {t("languages.1.text")}
            </p>
          </div>
          <div className="servicesleng-right-left-card">
            <Link
              to={`/contacts`}
              className="servicesleng-right-left-card__title"
            >
              {t("languages.2.title")}
            </Link>
            <p className="servicesleng-right-left-card__text">
              {t("languages.2.text")}
            </p>
          </div>
          <div className="servicesleng-right-left-card">
            <Link
              to={`/contacts`}
              className="servicesleng-right-left-card__title"
            >
              {t("languages.3.title")}
            </Link>
            <p className="servicesleng-right-left-card__text">
              {t("languages.3.text")}
            </p>
          </div>
        </div>

        <div className="servicesleng-right-right">
          <div className="servicesleng-right-right-card">
            <Link
              to={`/contacts`}
              className="servicesleng-right-right-card__title"
            >
              {t("languages.4.title")}
            </Link>
            <p className="servicesleng-right-right-card__text">
              {t("languages.4.text")}
            </p>
          </div>
          <div className="servicesleng-right-right-card">
            <Link
              to={`/contacts`}
              className="servicesleng-right-right-card__title"
            >
              {t("languages.5.title")}
            </Link>
            <p className="servicesleng-right-right-card__text">
              {t("languages.5.text")}
            </p>
          </div>
          <div className="servicesleng-right-right-card">
            <Link
              to={`/contacts`}
              className="servicesleng-right-right-card__title"
            >
              {t("languages.6.title")}
            </Link>
            <p className="servicesleng-right-right-card__text">
              {t("languages.6.text")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesLeng;
