import React from 'react'
import { styled } from 'styled-components';

 const Container = styled.div`
 width: 100%;
 height: 100%;
 text-align: center;
 z-index: 100;
 h3{
  font-size: 1.5rem;
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
z-index: 101;
`
 const Div = styled.div`
 width: 300px;
 height:400px;
 margin: auto;
 overflow: hidden;
 display: flex;
 border-radius: 10px;
 z-index: 101;

 `

 const CategoryDiv = styled.div`
 position: relative;
 width: 300px;
 height:400px;
 margin: auto;
 display: flex;
 border-radius: 10px;
 transition: all 0.2s ease-in-out;
 &:hover{
   transform :scale(1.1);
   transition: all 0.2s ease-in-out;
  }
  
  img{
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  `
 const Contraste = styled.div`
 overflow: hidden;
 position: absolute;
 z-index: 10;
 width: 100%;
 height: 100%;
 inset: 0;
 background: rgba(0,0,0,0.7);
 border-radius: 10px;
 display: flex;
 justify-content: center;
 align-items: center;
 color : #fff;
 transition: all 0.4s ease-in-out;
 &:hover{
  background: rgba(0,0,0,0.5);
  transition: all 0.4s ease-in-out;
 }
 h4{
  font-size: 2rem;
  font-weight: 800;
  cursor: pointer;
 }

 `

const Main = ({Cat}) => {




  return (
  <Container>
   <h3>Categories</h3>
   <FlexCat>
   {Cat.map((cat,index)=>{
     return (
      <Div>
       <CategoryDiv>
         <img src={cat.image} alt="" />
         <Contraste>
         <h4>{cat.category}</h4>
         </Contraste>
       </CategoryDiv>
      </Div>
     )
     
    })}
    </FlexCat>
  </Container>
    )
}

export default Main