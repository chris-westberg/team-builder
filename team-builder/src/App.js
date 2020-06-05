import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import Form from './form'

function App() {
  const [teamList, setTeamList] = useState([])
  const Header = styled.h1 `
    text-align: center;
    margin: 0px;
  `

  return (
    <div>
      <Header>Add a team member!</Header>
      <Form />
    </div>
  );
}

export default App;
