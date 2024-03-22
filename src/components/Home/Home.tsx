import AddTagContainer from "../Tag/AddTagContainer";
import FeedContainer from "../Feed/FeedContainer";
import Modal from "../Modal";

function Home() {
  return (
    <div>
      <AddTagContainer />
      <FeedContainer />
      <Modal />
    </div>
  );
}

export default Home;
