import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Herobk from "../components/HeroBgk/HeroBgk";
import TeamCard from "../containers/TeamCard/TeamCard";

const Team = () => {
  const [t] = useTranslation();

  return (
    <div className="team">
      <Herobk
        home={t("sidebar.home")}
        title={t("sidebar.team")}
        clasWidth={"widht"}
        mbb={"mbb-mbb"}
      />

      <section className="section-join">
        <div className="section-join-inner container">
          <h2 className="section-join-inner__title">{t("teamPage.title")}</h2>

          <p className="section-join-inner__text">{t("teamPage.title")}</p>

          <Link to={`/contacts`} className="section-join-inner__button">
            {t("teamPage.title")}
          </Link>
        </div>
      </section>

      <TeamCard />

      <section className="section-aplay">
        <div className="section-aplay-inner container">
          <h3 className="section-aplay-inner__title">{t("teamPage.title")}</h3>

          <div className="section-aplay-inner-cards">
            <div className="section-aplay-inner-cards-item">
              <span className="section-aplay-inner-cards-item__number">1</span>
              <span className="section-aplay-inner-cards-item__text">
                {t("teamPage.1")}
              </span>
            </div>

            <div className="section-aplay-inner-cards-item">
              <span className="section-aplay-inner-cards-item__number">2</span>
              <span className="section-aplay-inner-cards-item__text">
                {t("teamPage.2")}
              </span>
            </div>

            <div className="section-aplay-inner-cards-item">
              <span className="section-aplay-inner-cards-item__number">3</span>
              <span className="section-aplay-inner-cards-item__text">
                {t("teamPage.3")}
              </span>
            </div>

            <div className="section-aplay-inner-cards-item">
              <span className="section-aplay-inner-cards-item__number">4</span>
              <span className="section-aplay-inner-cards-item__text">
                {t("teamPage.4")}
              </span>
            </div>

            <div className="section-aplay-inner-cards-item">
              <span className="section-aplay-inner-cards-item__number">5</span>
              <span className="section-aplay-inner-cards-item__text">
                {t("teamPage.5")}
              </span>
            </div>
          </div>

          <Link to={`/contacts`} className="section-aplay-inner__button">
            {t("teamPage.applyBtn")}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Team;
