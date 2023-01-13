import React from "react";
import NavBar from "./components/navBar";

import SearchBar from "./components/seacrhBar";
import "./styles/global.module.scss";

const App = () => {
  return (
    <div>
      <NavBar />
      <SearchBar />
    </div>
  );
};

export default App;
