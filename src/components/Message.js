import React from 'react'
/**
 * можно и так // import style from './Message.module.css'
 */

import styled from "styled-components";


const Message = ( {text} ) => {
    return (
        <Flux>
            <p>{text}</p>
        </Flux>
    )

}

export default Message;

const Flux = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 22px;
  color: blueviolet;
`