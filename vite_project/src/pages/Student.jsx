import React from "react";
import "./Student.css";
import image from  "../assets/IMG20251109114747.jpg"
const Student = () => {
  return (
    <div className="class">
      <h1>Student Profile</h1>
      <h2>Name: Harish Babu P S</h2>
      <h2>Clg: PSNACET</h2>
      <h2>year: 4</h2>
      <img src={image}></img>
    </div>
  );
};
export default Student;
