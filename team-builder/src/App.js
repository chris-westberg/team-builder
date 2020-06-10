import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import Form from './form'
import UserCard from './userCard'

function App() {
  const [teamList, setTeamList] = useState([
      {
        name: 'Daryl Finkerston', 
        email: 'daryl@finterston.com', 
        role: 'Developer'
      }
  ]);
  
  const Header = styled.h1 `
    text-align: center;
    margin: 0px;
  `
  const Divided = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `
  const addUser = (card) => {
    setTeamList([...teamList, card])
  }

  return (
    <div>
      <Header>Add a team member!</Header>
      <Form addUser={addUser}/>
      <Divided>
        {teamList.map(e => {
        return <UserCard name={e.name} email={e.email} role={e.role}/>
      })}
      </Divided>
    </div>
  );
}

export default App;
