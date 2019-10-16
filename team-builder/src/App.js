import React, { useState } from 'react';
import ReactDOM from "react-dom";
import Form from "./Components/Form";
import Members from "./Components/Members";

import './App.css';

function App() {
  const [members, setMembers] = useState([
    {
      name: "Addison Hill",
      email: "adddison.hill@gmail.com",
      role: "Gamer, Entrepreneur, Coding Genius"
    },

    {
      name: "Dak Prescott",
      email: "dakattack@gmail.com",
      role: "Quarterback"
    },

    {
      name: "Ezekial Elliot",
      email: "zekeeats@gmail.com",
      role: "Running Back"
    }
  ])

  const addNewMember = member => {
    setMembers([...members, member])
  }

  const memberToEdit = () => {
    
  }
  return (
    <div className="App">
      <h1 className="title">Dallas Cowboys</h1>
      <Form addNewMember={addNewMember} />
      <Members membersList={members} />
      
    </div>
  );
}

export default App;
