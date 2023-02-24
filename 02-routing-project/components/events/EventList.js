import EventItem from "./EventItem";
import classes from "./EventList.module.css";

const EventList = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map((event) => {
        return <EventItem item={event} key={event.id} />;
      })}
    </ul>
  );
};

export default EventList;
