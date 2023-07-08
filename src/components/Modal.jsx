import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
position: fixed;
width: 100%;
height: 100vh;
top:0;
bottom: 0;
left: 0;
bottom: 0;
z-index: 5000;
background:rgba(0,0,0,0.5);
`
const ModalDiv = styled.div`
position: absolute;
top: 5rem;
right: 2rem;
width: 400px;
height: 100px;
background:${({theme})=>theme.background};
color: ${({theme})=>theme.color};
border-radius: 8px;
display: flex;
justify-content: center;
align-items: center;
h3{
    text-transform: capitalize;
}
`

const Modal = () => {
  return (
    <Container>
        <ModalDiv>
          <h3>item added to cart</h3>
        </ModalDiv>
    </Container>
  )
}

export default Modal