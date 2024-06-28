import React from "react";
import Navbar from "./components/Navbar";
import Newsboard from "./components/Newsboard";
import { useState } from "react";


function App() {
  const [category, setCategory] = useState("general")
  
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <Newsboard  category={category}  />
    </div>
  );
}

export default App;
