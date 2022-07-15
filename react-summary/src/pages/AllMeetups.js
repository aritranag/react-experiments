import MeetupList from "../components/meetups/MeetupList";
import { DUMMY_DATA } from "../mock/AllMeetups.mock";

function AllMeetupsPage(props) {
  return (
    <div>
      <h1>All Meetups Page</h1>
      <MeetupList items={DUMMY_DATA} />
    </div>
  );
}

export default AllMeetupsPage;
