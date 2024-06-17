import { Link } from "react-router-dom";
import "./NewsfeedCard.scss";

const NewsfeedCard = () => {
  return (
    <div className="newsfeed-card">
      <div className="newsfeed-card__image">
        <Link to="#">
          <img
            src="http://via.placeholder.com/500x240"
            alt="newsfeed"
            className="newsfeed-card__img"
          />
        </Link>
      </div>
      <div className="newsfeed-card__content">
        <h3 className="newsfeed-card__title">
          TITLE Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h3>
        <p className="newsfeed-card__description">
          CONTENT Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec mauris nec
          nisl ultricies scelerisque. Donec nec sapien in urna tincidunt aliquet. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec
          sapien in urna tincidunt aliquet. Pellentesque habitant morbi tristique sen
        </p>
        <Link to="#" className="newsfeed-card__link">
          Read more
        </Link>
      </div>
    </div>
  );
};
export default NewsfeedCard;
