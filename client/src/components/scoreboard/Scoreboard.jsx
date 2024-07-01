import PropTypes from "prop-types";
import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import { ScoreboardCard } from "../cards";
import "./Scoreboard.scss";

const Scoreboard = ({ games }) => {
  return (
    <div className="scoreboard">
      <Swiper
        modules={[Navigation, A11y]}
        initialSlide={25}
        slidesPerView={6}
        slidesPerGroup={6}
        navigation
        breakpoints={{
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1024: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          1200: {
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
        }}>
        {games.map(game => (
          <SwiperSlide key={game.fixture.id}>
            <ScoreboardCard game={game} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

Scoreboard.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Scoreboard;
