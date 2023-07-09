import React, { useState } from 'react'
import { styled } from 'styled-components'
import { useContextAuth } from '../Context/ContextAuth'

const Container = styled.div`
display: ${({$signin})=>$signin ? 'block': 'none' };
position: fixed;
inset: 0;
background: #f3f5f9;
width: 100%;
height: 100vh;
z-index: 50000;
`

const Signin = () => {
  const {signin} =   useContextAuth()
  console.log(signin);

  return (
        <Container $signin={signin}> 

        </Container>
  )
}

export default Signin