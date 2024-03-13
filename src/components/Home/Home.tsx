import React from "react";
import AddTagContainer from "../Tag/AddTagContainer";
import FeedContainer from "../Feed/FeedContainer";

function Home() {
  return (
    <div>
      <AddTagContainer />
      <FeedContainer />
    </div>
  );
}

export default Home;
