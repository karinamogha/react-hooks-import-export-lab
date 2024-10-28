import React from "react";
import NavBar from "./NavBar";
import About from "./About";
import Home, { username, city, image } from '../components/Home'; // Adjust the path as needed


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
