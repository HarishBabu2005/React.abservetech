import React from "react";
import About from "./About";
import { Link } from "react-router-dom";
const Home = () => {
  const obj = {
    name: "Demo",
    course: "MERN",
  };
  const str = "dfghjk";
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
      {/* <h2>{obj.name}</h2> */}
      {/* <About data={obj} data2={str} /> */}
    </div>
  );
};

export default Home;
