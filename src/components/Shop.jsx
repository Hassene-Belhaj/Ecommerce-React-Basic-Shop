import React from 'react'
import styled from 'styled-components'
import { Cat } from '../../public/Data/Cat'

const Container = styled.div`
width: 80%;
height: 100vh;
padding:2rem 0;
margin: auto;
display: flex;
`
const LeftCol = styled.div`
width: 200px;
height: 100%;
input{
    width: 70%;
    height: 1.5rem;
    border : solid 1px rgba(180,180,180,0.8) ;
    border-radius: 3px;
::placeholder{
    padding-left: .3rem;
}
}

li{
    margin :1rem 0 ;
    list-style: none;
    cursor: pointer;
}
`
const InputDiv = styled.div`
`
const RightCol = styled.div`
`

const Shop = () => {
  return (
    <Container>
      <LeftCol>
        <InputDiv>
        </InputDiv>
     </LeftCol>  
      <RightCol>
        
      </RightCol>
    </Container>
  )
}

export default Shop