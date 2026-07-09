import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";

import Student from "./Components/Students/Student"
import Hero from "./Components/Hero/Hero";
import Home from "./pages/Home";
import Counter from "./Components/Counter/Counter";

function App() {
  return (
    <>
      {/* <Student data={["harish","cse","psnacet"]}/> */}
      {/* <Student name="sri" dep="ece" clg="klncet"/> */}
      {/* <Hero/> */}
      {/* <Home /> */}
      
      <Counter/>

    </>
  );
}

export default App;
