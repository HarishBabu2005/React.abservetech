import React from "react";
import About from "./About";

const Home = () => {
  const obj = {
    name: "Demasao",
    course: "MERN",
  };
  const str = "dfghjk";
  return (
    <div>
      Home
      <h2>{obj.name}</h2>
      <About data={obj} data2={str} />
    </div>
  );
};

export default Home;
