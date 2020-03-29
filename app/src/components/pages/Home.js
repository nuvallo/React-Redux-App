import React from "react";

function Home({ data }) {
  console.log(data);
  return (
    <div>
      {data.map(person => {
        return <h1>{person.name}</h1>;
      })}
    </div>
  );
}

export default Home;
