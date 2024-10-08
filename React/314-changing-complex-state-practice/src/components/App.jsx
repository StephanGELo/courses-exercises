import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    if (name === "fName") {
      setContact((prevValue => {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        }
      }));
    } else if (name === "lName") {
      setContact((prevValue => {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        }
      }));
    } else if (name === "email") {
      setContact((prevValue => {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        }
      }));
    }
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" />
        <input onChange={handleChange} name="lName" placeholder="Last Name" />
        <input onChange={handleChange} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
