import { NewsfeedCard } from "../cards";
import "./Newsfeed.scss";

// TODO: Map through the data and render a NewsfeedCard component for each news item
// Right now we are just rendering several NewsfeedCard component as placeholders, but this will be dynamic in the next milestone

const Newsfeed = () => {
  return (
    <section>
      <NewsfeedCard />
      <NewsfeedCard />
      <NewsfeedCard />
      <NewsfeedCard />
    </section>
  );
};
export default Newsfeed;
