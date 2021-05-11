import "./AboutAgency.scss";

import aboutCardImg from "../../assets/images/images1.png";
import { useTranslation } from "react-i18next";

const AboutAgency = () => {
  const { t } = useTranslation();

  return (
    <section className="about-campany">
      <div className="about-campany-inner container">
        <div className="about-campany-inner-left">
          <img
            src={aboutCardImg}
            alt=""
            className="about-campany-inner-left__img"
          />
        </div>

        <div className="about-campany-inner-right">
          <p className="about-campany-inner-right__suptitle">
            {t("agency.suptitle")}
          </p>
          <h2 className="about-campany-inner-right__title">
            {t("agency.text")}
          </h2>
          <p className="about-campany-inner-right__subtitle">
            {t("agency.subtitle")}
          </p>

          <div className="about-campany-inner-right-toptext">
            <p className="about-campany-inner-right-toptext__text">
              {t("agency.0.1")}
            </p>
            <p className="about-campany-inner-right-toptext__text">
              {t("agency.0.2")}
            </p>
            <p className="about-campany-inner-right-toptext__text">
              {t("agency.0.3")}
            </p>
            <p className="about-campany-inner-right-toptext__text">
              {t("agency.0.4")}
            </p>
            <p className="about-campany-inner-right-toptext__text">
              {t("agency.0.5")}
            </p>
            <p className="about-campany-inner-right-toptext__text">
              {t("agency.0.6")}
            </p>
          </div>

          <div className="about-campany-inner-right-resp">
            <h3 className="about-campany-inner-right-resp__title">
              {" "}
              {t("agency.levels")}
            </h3>
            <p className="about-campany-inner-right-resp__subtitle">
              {" "}
              {t("agency.prelevels")}
            </p>

            <p className="about-campany-inner-right-resp__text">
              {t("agency.1.1")}
            </p>
            <p className="about-campany-inner-right-resp__text">
              {t("agency.1.2")}
            </p>
            <p className="about-campany-inner-right-resp__text">
              {" "}
              {t("agency.1.3")}
            </p>
            <p className="about-campany-inner-right-resp__text">
              {t("agency.1.4")}
            </p>
            <p className="about-campany-inner-right-resp__text">
              {t("agency.1.5")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAgency;
