import { Link } from "react-router-dom";
import { IMG_URL } from "../../../utils/constantData";
import "./card.css";

function Card({ resData }) {
  const { name, cuisines, rating, costForTwo, cloudinaryImageId } = resData;

  return (
    <Link to={`/view-restaurant/${resData.$id}`}>
      <div className="card">
        <div className="top-section">
          <img
            className="card-img"
            src={`${IMG_URL}/${cloudinaryImageId}`}
            alt={name}
          />
          <div className="border"></div>
        </div>
        <div className="bottom-section">
          <span className="title">{name}</span>
          <div className="cuisines">{cuisines.join(", ")}</div>
          <div className="row row1">
            <div className="item">
              <span className="regular-text">Rating</span>&nbsp;
              <span className="regular-text">{rating}</span>
            </div>
            <div className="item">
              <span className="regular-text">Cost For Two</span>&nbsp;
              <span className="regular-text">{costForTwo}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
