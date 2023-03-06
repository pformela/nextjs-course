import EventItem from "./EventItem";
import classes from "./EventList.module.css";

const EventList = (props) => {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map((event) => {
        return <EventItem item={event} key={event.id} />;
      })}
    </ul>
  );
};

export default EventList;
