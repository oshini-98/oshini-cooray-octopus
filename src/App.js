import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import AddHobbies from './Component/AddHobbies';
import { UpdateHobbies } from "./Component/UpdateHobbies";
import { MyHobbies } from "./Component/MyHobbies";

function App() {
  return (
    <div className="App">
      {/* <AddHobbies/> */}
      {/* <UpdateHobbies/> */}
      <MyHobbies/>
    </div>
  )
}

export default App;