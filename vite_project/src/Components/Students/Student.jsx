import React from "react";
import "./Student.css";
import { useParams } from "react-router-dom";
// import image from  "../assets/IMG20251109114747.jpg"
const Student = ({data}) => {
  const params=useParams();
  console.log(params)
  return (
    <div className="class">
      <h1>Student   {params.id}</h1>
      {/* array and map function */}
      {/* <ul>
          {data.map((dataa,index) =>{

            return <li key={index}>Details: {dataa}</li>

})}
      </ul> */}
      
    
{/*     
    <h1>Student name: {data[0]}</h1>
    <h1>Department: {data[1]}</h1>
    <h1>College: {data[2]}</h1> */}
    
    </div>
  );
};
export default Student;
