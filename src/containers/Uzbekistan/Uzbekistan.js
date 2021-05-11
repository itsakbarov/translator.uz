import "./Uzbekistan.scss";

import UzbBacgk from "../../assets/images/Uzbekistan-images.jpeg";
import { useTranslation } from "react-i18next";

const Uzbekistan = () => {
  const [t] = useTranslation();
  return (
    <section className="uzb-section container">
      <div className="uzb-section-left">
        <img src={UzbBacgk} alt="" className="uzb-section-left__img" />
      </div>
      <div className="uzb-section-right">
        <h2 className="uzb-section-right__title"> {t("uzbekistan.title")}</h2>
        <span className="uzb-section-right__text">
          {t("uzbekistan.1.a")}
          <span className="mintext">{t("uzbekistan.1.b")}</span>
        </span>
        <span className="uzb-section-right__text">
          {t("uzbekistan.2.a")}

          <span className="mintext"> {t("uzbekistan.2.b")}</span>
        </span>
        <span className="uzb-section-right__text">{t("uzbekistan.3.0")}: </span>
        <span className="mintext"> • {t("uzbekistan.3.a")}</span>
        <span className="mintext"> • {t("uzbekistan.3.b")}</span>
        <span className="mintext"> • {t("uzbekistan.3.c")}</span>
        <span className="mintext"> • {t("uzbekistan.3.d")}</span>

        <span className="uzb-section-right__text">
          {t("uzbekistan.4.a")} :
          <span className="mintext">{t("uzbekistan.4.b")} </span>
        </span>
        <span className="uzb-section-right__text">
          {t("uzbekistan.5.a")}:{" "}
          <span className="mintext">{t("uzbekistan.5.b")}</span>
        </span>
        <span className="uzb-section-right__text">
          {t("uzbekistan.6.a")}:{" "}
          <span className="mintext"> {t("uzbekistan.6.b")}:</span>
        </span>
        <span className="uzb-section-right__text">
          {t("uzbekistan.7.a")}:
          <span className="mintext">{t("uzbekistan.7.b")}</span>
        </span>
        <span className="uzb-section-right__text">
          {t("uzbekistan.8.a")}:{" "}
          <span className="mintext">{t("uzbekistan.7.a")}</span>
        </span>
        <span className="uzb-section-right__text">
          {t("uzbekistan.9.a")} :{" "}
          <span className="mintext">{t("uzbekistan.9.b")}</span>
        </span>
        <span className="uzb-section-right__text">
          {" "}
          {t("uzbekistan.10.a")} :{" "}
          <span className="mintext">{t("uzbekistan.10.b")}</span>
        </span>
        <span className="uzb-section-right__text">
          {t("uzbekistan.11.a")} :{" "}
          <span className="mintext">{t("uzbekistan.11.b")}</span>
        </span>
      </div>
    </section>
  );
};

export default Uzbekistan;
