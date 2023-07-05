import React from 'react'
import { styled } from 'styled-components';

 const Container = styled.div`
 width: 100%;
 height: 100%;
 text-align: center;
 h3{
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
 }
 `
 const FlexCat = styled.div`
 padding-top: 2rem ;
 width: 80%;
 height :100%;
 display:flex;
 flex-wrap: wrap;
 justify-content: center;
 align-items : center;
 margin : auto ;
 gap : 2rem ;
 button{
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(153,95,156,1) 0%, rgba(108,129,185,1) 100%, rgba(0,212,255,1) 100%);
  color :#fff ;
  border:none;
  padding:10px;
  border-radius: 5px;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
&:hover{
  transform:scale(1.15);
  transition: all 0.2s ease-in-out;
}
 }
 `

const Main = ({Cat}) => {




  return (
  <Container>
   <h3>Categories</h3>
   <FlexCat>
   {Cat.map((cat,index)=>{
     return <button style={{marginRight:'1rem'}} key={index}>{cat.category}</button>
    })}
    </FlexCat>
  </Container>
    )
}

export default Main