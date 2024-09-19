import React, { useState } from "react";

function App() {
  const [ fName, setFName ] = useState("");
  const [ lName, setLName ] = useState("");
  

  function updateFName(event) {
    setFName(event.target.value)
  }

  function updateLName(event) {
    setLName(event.target.value);
  }


  return (
    <div className="container">
      <h1>Hello {fName} {lName}</h1>
      <form>
        <input onChange={updateFName} name="fName" placeholder="First Name"  value={fName}/>
        <input onChange={updateLName} name="lName" placeholder="Last Name" value={lName} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
