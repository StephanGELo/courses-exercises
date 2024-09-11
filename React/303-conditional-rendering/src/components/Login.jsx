import React from 'react';
import Input from "./Input";

let inputs = [
  {id: 1, type: "text", placeholder:"Username"},
  {id: 2, type: "password", placeholder:"Password"},
  {id: 3, type: "email", placeholder: "Email"}
]

function Login() {
    return (
    <form className="form">
        {inputs.map(input => <Input key={input.id} type={input.type} placeholder={input.placeholder}/> )}
        <button type="submit">Login</button>
      </form>
      )
}

export default Login;