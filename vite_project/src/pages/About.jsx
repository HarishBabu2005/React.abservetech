import React from "react";

const About = ({ data, data2 }) => {
  const obj = data;
  const cars = ["Ford", "BMW", "Audi"];
  return (
    <div>
      <div>About</div>
      {/* {obj.course === "MERN" ? <h1>{obj.course}</h1> : <p>No course found</p>} */}
      {obj.course === "MERN" && obj.name === "Demo" && <h1>{obj.course}</h1>}
      <p>{data2}</p>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>I am a {car}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;
