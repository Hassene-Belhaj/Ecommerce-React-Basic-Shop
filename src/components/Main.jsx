import React from 'react'
import { useContextData } from '../Context/ContextData';
import { styled } from 'styled-components';
import { useContextCategories } from '../Context/ContextCategories';

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
  cursor: pointer;

 }
 `

const Main = () => {
 const {cat} = useContextCategories()
 console.log(cat);
 const [data] =  useContextData()
 console.log(data);




  return (
  <Container>
   <h3>Categories</h3>
   <FlexCat>
   {cat.map((cat,index)=>{
     return <button style={{marginRight:'1rem'}} key={index}>{cat}</button>
    })}
    </FlexCat>
  </Container>
    )
}

export default Main