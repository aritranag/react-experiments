import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.items.map((obj) => {
        return <MeetupItem key={obj.id} item={obj}></MeetupItem>;
      })}
    </ul>
  );
}

export default MeetupList;
