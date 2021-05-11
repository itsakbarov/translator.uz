import { Link } from "react-router-dom";
import "./UsersCard.scss";

const UsersCard = ({
  userName = "Randy crishen",
  userCeo = "Our Company CEO",
  userImg,
}) => {
  return (
    <Link to={`/team`} className="teamcard-inner-item">
      <div className="our-team">
        <div className="team_img">
          <img src={userImg} alt="chef-1" className="team_img-inner" />
        </div>
        <div className="team-content">
          <h4 className="title">{userName}</h4>
          <span className="icoo" id="icoo"></span>
          <span className="post">{userCeo}</span>
        </div>
      </div>
    </Link>
  );
};

export default UsersCard;
