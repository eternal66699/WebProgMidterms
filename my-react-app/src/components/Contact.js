import React, { useState } from "react";
import Navigation from "./Navigation";
import ReactDOM from 'react-dom/client';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [textarea, setTextarea] = useState("");
    const handleChange = (event) => {
        setTextarea(event.target.value)
      }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  }
    return (
      <div>
        <Navigation />
        <form onSubmit={handleSubmit}>
        <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>Enter your email:
        <input 
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label>Message:
      <textarea value={textarea} onChange={handleChange} />
      <input type="submit" />
      </label>
        </form>
      </div>
    );
  };

  export default Contact;