import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/EventList";

const HomePage = (props) => {
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      events: await getFeaturedEvents(),
    },
    revalidate: 1800,
  };
};

export default HomePage;
