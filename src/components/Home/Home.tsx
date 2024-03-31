import AddTagContainer from "../Tag/AddTagContainer";
import FeedContainer from "../Feed/FeedContainer";
import Modal from "../Modal";
import { ModalProvider } from "../../context/ModalContext";

function Home() {
  return (
    <div>
      <ModalProvider>
        <AddTagContainer />
        <FeedContainer />
        <Modal />
      </ModalProvider>
    </div>
  );
}

export default Home;
