import { Link } from "react-router-dom";

import "./HeroBgk.scss";

const HeroBgk = ({ title, clasWidth, mbb, home }) => {
  return (
    <section className={` ${mbb} herobgk`}>
      <span className="bgk-collor"></span>
      <h2 className="herobgk__title">{title}</h2>

      <div className={`${clasWidth} herobgk-link`}>
        <Link className="herobgk-link__item" to={`/`}>
          {home}
        </Link>

        <Link className="herobgk-link__item">{title}</Link>
      </div>
    </section>
  );
};

export default HeroBgk;
