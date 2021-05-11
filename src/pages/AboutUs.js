import { useTranslation } from "react-i18next";
import HeroBgk from "../components/HeroBgk/HeroBgk";
import AboutAgency from "../containers/AboutAgency/AboutAgency";
import Uzbekistan from "../containers/Uzbekistan/Uzbekistan";

const AboutUs = () => {
  const [y] = useTranslation();
  return (
    <div className="aboutus">
      <HeroBgk home={y("sidebar.home")} title={y("sidebar.about_us")} />
      <AboutAgency />

      <Uzbekistan />
    </div>
  );
};

export default AboutUs;
