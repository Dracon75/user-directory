import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./components/Search";
import Header from "./components/Header";
import RandomPerson from "./components/RandomPerson";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Search />
        <Route exact path="/" component={RandomPerson} />
      </div>
    </Router>
  );
}

export default App;
