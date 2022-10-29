import React from "react"
import User from "./components/User";
import NavBar from "./components/NavBar";

function clickHandler() {
return ()=> {}
}

function App() {


  return (
    <div className="App">
      <NavBar/>
     <User 
     onCLick={clickHandler} 
     bootcamp={ 'Ironhack'} />
    </div>
  );
}

export default App;
