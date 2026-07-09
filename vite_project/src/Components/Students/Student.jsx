import React from "react";
import "./Student.css";
// import image from  "../assets/IMG20251109114747.jpg"
const Student = ({data}) => {
  return (
    <div className="class">
      {/* array and map function */}
      <ul>
          {data.map((dataa,index) =>{

            return <li key={index}>Details: {dataa}</li>

})}
      </ul>
      
    
    
    <h1>Student name: {data[0]}</h1>
    <h1>Department: {data[1]}</h1>
    <h1>College: {data[2]}</h1>
    
    </div>
  );
};
export default Student;
