import React, { useState } from 'react';
import ReactDOM from "react-dom";
import Form from "./Components/Form";
import Members from "./Components/Members";

import './App.css';

function App() {
  const [members, setMembers] = useState([])

  const addNewMember = member => {
    setMembers([...members, member])
  }
  return (
    <div className="App">
      <h1>My Team</h1>
      <Form addNewMember={addNewMember} />
      <Members membersList={members} />
      
    </div>
  );
}

export default App;
