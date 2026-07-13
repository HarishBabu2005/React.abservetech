import React from "react";
import { Link, useNavigate } from "react-router-dom";

const About = ({ data, data2 }) => {
  const obj = data;
  const cars = ["Ford", "BMW", "Audi"];
  const navigate = useNavigate();
  return (
    <div>
      <div>
        About
        <button onClick={() => navigate(-1)}>back</button>
        <Link to={"/"}>Home</Link>
      </div>
      {/* {obj.course === "MERN" ? <h1>{obj.course}</h1> : <p>No course found</p>}
      {obj.course === "MERN" && obj.name === "Demo" && <h1>{obj.course}</h1>}
      <p>{data2}</p>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>I am a {car}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default About;
