import PropTypes from "prop-types";
import "./NewsfeedCard.scss";

const NewsfeedCard = ({ _id, description, headline, images }) => {
  return (
    <li className="newsfeed-card" key={_id}>
      {images.length > 0 && images[0].url && (
        <div className="newsfeed-card__image">
          <img
            src={images[0].url}
            alt={images[0].alt || "newsfeed"}
            className="newsfeed-card__img"
          />
        </div>
      )}
      <div className="newsfeed-card__content">
        <h3 className="newsfeed-card__title">{headline}</h3>
        <p className="newsfeed-card__description">{description}</p>
      </div>
    </li>
  );
};

NewsfeedCard.propTypes = {
  _id: PropTypes.string,
  description: PropTypes.string,
  headline: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string,
      caption: PropTypes.string,
      url: PropTypes.string,
    })
  ),
};

export default NewsfeedCard;
