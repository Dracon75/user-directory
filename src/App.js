import React from "react";
import './UserDirectory.css';
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import SearchBar from "./components/SearchBar";
import RandomUserApi from "./components/RandomUserApi";



function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <SearchBar />
        <RandomUserApi />
      </Wrapper>

    </div>
  );
}

export default App;
