import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";

const HomePage = () => {
  const featuresEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuresEvents} />
    </div>
  );
};

export default HomePage;
