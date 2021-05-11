import { useTranslation } from "react-i18next";
import HeroBgk from "../components/HeroBgk/HeroBgk";

const Contacts = () => {
  const [t] = useTranslation();
  return (
    <div className="contacts">
      <div className="contacts-top">
        <HeroBgk title={t("sidebar.contacts_us")} home={t("sidebar.home")} />
      </div>

      <div className="contacts-inner container">
        <div className="contacts-inner-left">
          <h2 className="contacts-inner-left__title">
            {t("sidebar.contacts_us")}
          </h2>
          <p className="contacts-inner-left__text">{t("contact.title")}</p>

          <div className="contacts-inner-left-card">
            <h3 className="contacts-inner-left-card__name">
              {t("contact.location")} :
            </h3>
            <a
              href="https://www.google.com/maps/place/Zarkent+Drive+3,+%D0%A2%D0%BE%D1%88%D0%BA%D0%B5%D0%BD%D1%82,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.2941087,69.2221419,18.67z/data=!4m5!3m4!1s0x38ae8a4c7e0116a9:0x5f00d380f9efc008!8m2!3d41.2937529!4d69.2225189"
              className="contacts-inner-left-card__link"
              rel="noreferrer"
              target="_blank"
            >
              {t("contact.location_name")}
            </a>
          </div>
          <div className="contacts-inner-left-card">
            <h3 className="contacts-inner-left-card__name">
              {t("contact.mail")}
            </h3>
            <a
              href="mailto:translatorsuzbekistan@gmail.com"
              className="contacts-inner-left-card__link"
            >
              translatorsuzbekistan@gmail.com
            </a>
          </div>
          <div className="contacts-inner-left-card">
            <h3 className="contacts-inner-left-card__name">
              {t("contact.phone")}
            </h3>
            <a
              href="tel:+998935805259"
              className="contacts-inner-left-card__link"
            >
              +998935805259
            </a>
          </div>
        </div>
        <div className="contacts-inner-right">
          <iframe
            className="contacts-inner-right__maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d854.2771067027602!2d69.22213121526843!3d41.29411855014509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a4c7e0116a9%3A0x5f00d380f9efc008!2zWmFya2VudCBEcml2ZSAzLCDQotC-0YjQutC10L3Rgiwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2scz!4v1620743320996!5m2!1sru!2scz"
            width="600"
            height="450"
            title={Math.random()}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
