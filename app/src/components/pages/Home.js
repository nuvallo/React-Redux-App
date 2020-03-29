import React from "react";
import PersonItem from "../items/PokomonItem";

function Home({ data }) {
  console.log(data);
  return (
    <div>
      <PersonItem pokomon={data} key={data.id} />
    </div>
  );
}

export default Home;
