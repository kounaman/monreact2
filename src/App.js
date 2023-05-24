import React from "react";
import './App.css';
import ProfilePhoto from "./component/ProfilePhoto";
import FullName from "./component/FullName";
import Adress from "./component/Adress";

function App() {

  return (
    <div className="App">
      <ProfilePhoto/>
      <FullName/>
      <Adress/>
    
    </div>
  );
}

export default App;
