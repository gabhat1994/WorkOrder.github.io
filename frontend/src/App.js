import React from "react";
import Header from "./compoments/Header";
import {Switch , Route} from "react-router-dom"
import HomePage from "./compoments/Home"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact={true} component={HomePage} />
    </div>
  );
}

export default App;
