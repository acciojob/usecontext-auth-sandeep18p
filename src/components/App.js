import React, { useState } from "react";
import AuthContext from "./AuthContext";
import Heading from "./Heading";
import Para from "./Para";
import Checkbox from "./Checkbox";
import './../styles/App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleAuth = () => {
    setIsAuthenticated(prevState => !prevState);
  };
  
  return (
    <AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
      <div className="app-container">
        <Heading />
        <Para />
        <Checkbox />
      </div>
    </AuthContext.Provider>
  );
};

export default App;
