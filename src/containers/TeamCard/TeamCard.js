import "./TeamCard.scss";

import USersCard from "../../components/UsersCard/UsersCard";

import Member1 from "../../assets/images/member1.png";
import { useTranslation } from "react-i18next";

const TeamCard = () => {
  const [y] = useTranslation();
  const TeamArr = [
    {
      name: y("team.1.name"),
      Ceo: y("team.1.position"),
      userImg: Member1,
    },
    {
      name: y("team.2.name"),
      Ceo: y("team.2.position"),
      userImg: Member1,
    },
    {
      name: y("team.3.name"),
      Ceo: y("team.3.position"),
      userImg: Member1,
    },
    {
      name: y("team.4.name"),
      Ceo: y("team.4.position"),
      userImg: Member1,
    },
    {
      name: y("team.5.name"),
      Ceo: y("team.5.position"),
      userImg: Member1,
    },
    {
      name: y("team.6.name"),
      Ceo: y("team.6.position"),
      userImg: Member1,
    },
  ];

  return (
    <div className="teamcard container">
      <h2 className="teamcard__title">{y("team.title")}</h2>
      <p className="teamcard__text">{y("team.subtitle")}</p>

      <div className="team-cards">
        {TeamArr.map((item, index) => (
          <USersCard
            userImg={item.userImg}
            userName={item.name}
            userCeo={item.Ceo}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
export default TeamCard;
