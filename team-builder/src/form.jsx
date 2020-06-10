import React, { useState } from 'react'
import styled from 'styled-components'

const Form = (props) => {
    const Formulated = styled.form `
        display: flex;
        justify-content: center;
        align-items: center;
    // `
    const Input = styled.input `
        width: 200px;
        margin: 20px;
        background-color: #ededed;
    `
    const Divide = styled.div `
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `
    const [user, setUser] = useState({
        name: '',
        email: '',
        role: ''
    })
    console.log(user);

    const changeHandler = (e) => {
       setUser({
           ...user,
           [e.target.name]: e.target.value
       }) 
    }

    return(
        <form onSubmit={e => {
            e.preventDefault();
            setUser({name: '', email: '', role: ''});
            console.log(props.addUser);
            props.addUser(user);
        }}>
            <div>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input 
                        id='name' 
                        type='text' 
                        name='name'
                        placeholder='Enter Name'
                        value={user.name}
                        onChange={changeHandler}
                        />
                    <label htmlFor='email'>E-mail</label>
                    <input 
                        name='email' 
                        type='email' 
                        placeholder='Enter E-mail'
                        value={user.email}
                        onChange={changeHandler}
                        />
                    <label 
                        htmlFor='roles'
                        >Position
                    </label>
                    <select 
                        id='roles' 
                        name='role'
                        placeholder='Role' 
                        value={user.role}
                        onChange={changeHandler}
                        >
                            <option value='Developer'>Developer</option>
                            <option value='Design'>Design</option>
                            <option value='React'>React</option>
                            <option value='Supervisor'>Supervisor</option>
                    </select>
                </div>
                <div>
                    <input type='submit'/>
                    <input type='reset'/>
                </div>
            </div>
        </form>
    );
};

export default Form