import React, { useState } from "react";

function App() {
  const [ name, setName ] = useState("");
  const [ heading, setHeading ] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
   setHeading(name);
   event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {heading} </h1>
      <form onSubmit={handleSubmit}>
        <input 
        onChange={handleChange}
        type="text" 
        placeholder="What's your name?" 
        value={name}
        />
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
