import { useContext } from "react";
import { StandingsBasic } from "../";
import { ArticlesContext } from "../../contexts/ArticlesContext";
import { NewsfeedCard } from "../cards";
import "./Newsfeed.scss";

const Newsfeed = () => {
  const { articles } = useContext(ArticlesContext);
  return (
    <section className="newsfeed">
      <div className="newsfeed__container">
        <ul className="newsfeed__list">
          {articles.map(article => (
            <NewsfeedCard key={article._id} {...article} />
          ))}
        </ul>
        <div>
          <StandingsBasic />
        </div>
      </div>
    </section>
  );
};
export default Newsfeed;
