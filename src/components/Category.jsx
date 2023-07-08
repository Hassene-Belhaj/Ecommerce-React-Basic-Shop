import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';
import { useContextData } from '../Context/ContextData';
import { Cat } from '../../public/Data/Cat';

 const CatContainer = styled.div`
 width: 70%;
 height: 100%;
 margin: auto;
 text-align: center;
 z-index: 100;
 h3{
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
 }
 @media screen and (max-width : 768px){
  width : 100%
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
 margin :auto ;
 gap : 2rem ;
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
 button{
  padding  : 1rem;
  font-weight: 800;
  border: none;
  background: transparent;
  font-size: 1.2rem;
  color: #fff;
  cursor: pointer;
  }

 `

const Category = () => {
const [data] = useContextData()
const [newdata,setNewData] = useState([])


const filtercat = (id,category) =>{

  data.filter((element)=>element.category === category) 
  if(id === 0 ){
  setNewData(data)
  } else {
  setNewData(filtercat)  
  }
}  


  return (
  <CatContainer>
   <h3>Categories</h3>
   <FlexCat>
   {Cat.map((cat,index)=>{
     return (
      <Div key={index}>
       <CategoryDiv>
         <img src={cat.image} alt="" />
         <Contraste>
         <button onClick={()=>filtercat(cat.id,cat.category)}>{cat.category}</button>
         </Contraste>
       </CategoryDiv>
      </Div>
     )
     
    })}
    </FlexCat>
  </CatContainer>
    )
}

export default Category