import React from 'react'
import { useContextData } from '../Context/ContextData';
import { styled } from 'styled-components';

const Main = () => {
 const [data] =  useContextData()
 console.log(data);


const Container = styled.div`
width: 100%;
height: 100%;
text-align: center;
`



  return (
  <Container>
   <h3>Categories</h3>
  </Container>
    )
}

export default Main