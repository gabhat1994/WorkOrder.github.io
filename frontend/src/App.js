import React from "react";
import Header from "./compoments/Header";
import {Switch , Route} from "react-router-dom"
import HomePage from "./compoments/Home"
import PageNotFound from "./compoments/pagenotfound"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route path="/" exact={true} component={HomePage} />
      <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
