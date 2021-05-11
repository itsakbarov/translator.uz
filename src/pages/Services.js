import HeroBgk from "../components/HeroBgk/HeroBgk";
import ServicesCards from "../containers/ServicesCards/ServicesCards";

import SvImg from "../assets/images/sv-img.png";
import ServicesLeng from "../containers/ServicesLeng/ServicesLeng";
import { useTranslation } from "react-i18next";
const Services = () => {
  const [t] = useTranslation();

  return (
    <div className="services">
      <HeroBgk home={t("sidebar.home")} title={t("sidebar.services")} />

      <ServicesCards />

      <section className="services-section">
        <div className="services-section-inner container">
          <div className="services-section-inner-left">
            <img
              src={SvImg}
              alt=""
              className="services-section-inner-left__img"
            />
          </div>

          <div className="services-section-inner-right">
            <span className="services-section-inner-right__suptitle">
              {t("banner.suptitle")}
            </span>
            <h4 className="services-section-inner-right__title">
              {t("banner.title")}
            </h4>
            <p className="services-section-inner-right__text">
              {t("banner.subtitle")}
            </p>

            <div className="services-section-inner-right-check">
              <div className="services-section-inner-right-check-item">
                <div className="services-section-inner-right-check-item__info">
                  {t("banner.1")}
                </div>
              </div>

              <div className="services-section-inner-right-check-item">
                <div className="services-section-inner-right-check-item__info">
                  {t("banner.1")}
                </div>
              </div>

              <div className="services-section-inner-right-check-item">
                <div className="services-section-inner-right-check-item__info">
                  {t("banner.1")}
                </div>
              </div>

              <div className="services-section-inner-right-check-item">
                <div className="services-section-inner-right-check-item__info">
                  {t("banner.1")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesLeng />
    </div>
  );
};

export default Services;
