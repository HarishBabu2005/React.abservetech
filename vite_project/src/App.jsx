import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";

import Student from "./Components/Students/Student"
import Hero from "./Components/Hero/Hero";
import Home from "./pages/Home";
import Counter from "./Components/Counter/Counter";
import Parent from "./Components/Context-demo/Parent";
import GrandChild from "./Components/Context-demo/grandChild";
import Form from "./Components/Form-demo/FormDemo";
import StudentForm from "./Components/Form-demo/StudentForm";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      {/* <Student data={["harish","cse","psnacet"]}/> */}
      {/* <Student name="sri" dep="ece" clg="klncet"/> */}
      {/* <Hero/> */}
      {/* <Home /> */}
      
      {/* <Counter/> */}
      {/* <Parent name="Harish"/> */}
      {/* <Form/> */}
      {/* <StudentForm/> */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      

    </>
  );
}

export default App;
