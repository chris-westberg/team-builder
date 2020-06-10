import React from 'react';
import styled from 'styled-components'

const UserCard = (props) => {
    console.log('User Card Props', props)
    const Div = styled.div `
        border: 2px solid black;
        width: 300px;
        margin: 10px;
        padding: 10px;
        text-align: center;
        border-radius: 10px;

    `
    return (
    <Div>
        <h2>Name: {props.name}</h2>
        <h3>Email: {props.email}</h3>
        <h3>Role: {props.role}</h3>
    </Div>
    );
}
export default UserCard;