import React, { useState } from "react";

function App() {
  const [ name, setName ] = useState("");
  const [ heading, setHeading ] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit() {
   setHeading(name);
  }

  return (
    <div className="container">
      <h1>Hello {heading} </h1>
      <input 
      onChange={handleChange}
      type="text" 
      placeholder="What's your name?" 
      value={name}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
