import React from "react";
import About from "./About";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  const obj = {
    name: "Demo",
    course: "MERN",
  };
  const str = "dfghjk";
  const navigate = useNavigate();
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      {/* <Link to="/about">About</Link> */}
      <button onClick={() => navigate("/about")}>About</button>
      <Link to="/student/:id">Student</Link>
      {/* <h2>{obj.name}</h2> */}
      {/* <About data={obj} data2={str} /> */}
    </div>
  );
};

export default Home;
