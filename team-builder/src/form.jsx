import React from 'react'
import styled from 'styled-components'

const Form = () => {
    const Formulated = styled.form `
        display: flex;
        justify-content: center;
        align-items: center;
    `
    const Input = styled.input `
        width: 200px;
        margin: 20px;
        background-color: #ededed;
    `

    return(
        <Formulated>
            <Input type='text' placeholder='Name'/>
            <Input type='text' placeholder='E-Mail'/>
            <Input type='text' placeholder='Role'/>
        </Formulated>
    );
}

export default Form