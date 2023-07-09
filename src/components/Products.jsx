import React, { useState } from 'react'
import { styled } from 'styled-components'
import { useContextData } from '../Context/ContextData'
import Product from './Product'
import Category from './Category'
import { Cat } from '../../public/Data/Cat'
import { useEffect } from 'react'
import {AnimatePresence,motion } from 'framer-motion'


const Container = styled.div`
width: 100%;
height: 100%;
margin-top: 4rem;
text-align: center;
 h3{
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
 }
`

const Grid = styled.div`
width: 80%;
height : 100%;
display: grid;
grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
justify-content: center;
align-items: center;
gap : 2rem;
margin: 5rem auto;
`
const ProductsDiv = styled.div`
width: 100%;
height: 100%;
overflow: hidden;
border-radius: 10px;
`

const CatContainer = styled.div`
width: 90%;
height: 100%;
margin: auto;
padding-bottom: 3rem;
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
height:150px;
margin: auto;
overflow: hidden;
display: flex;
border-radius: 10px;
z-index: 101;
cursor: pointer;

`

const CategoryDiv = styled.div`
position: relative;
width: 300px;
height:150px;
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
h3{
 font-size: 1.2rem;
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




const Products = () => {

  const [data] = useContextData()
  const [newdata,setNewData] = useState([])
  
  useEffect(()=>{
  setNewData(data)  
  },[data])
  
  
  const Filter = (id,cat) => {
  const categoryData = data.filter((item)=>item.category === cat)
  if (id === 0) {
    setNewData(data)
  } else {
    setNewData(categoryData)
  }
}

 



  return (
    <Container>
        <CatContainer>
   <h3>Categories</h3>
   <FlexCat>
   {Cat.map((item,index)=>{
     return (
      <Div key={index} onClick={()=>Filter(item.id,item.cat)}>
       <CategoryDiv>
         <img src={item.image} alt="" />
         <Contraste>
         <h3>{item.cat}</h3>
         </Contraste>
       </CategoryDiv>
      </Div>
     )
     
    })}
    </FlexCat>
  </CatContainer>
        <h3>Products</h3>
        <Grid>
         {newdata.map((product,index)=>{
            return (
              <AnimatePresence key={index}>
               <motion.div 
               layout
               key={product.id}
               initial={{opacity : 0}}
               animate={{opacity : 1}}
               exit={{opacity : 0}}
               transition={{
                duration : 0.3
               }}
               >
                <ProductsDiv  >
                        <Product product={product} />
                </ProductsDiv>
               </motion.div>
              </AnimatePresence>
            )
         })}
        </Grid>
    </Container>
  )
}

export default Products