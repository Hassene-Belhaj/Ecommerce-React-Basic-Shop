import React, { useState } from 'react'
import styled from 'styled-components'
import { useContextData } from '../Context/ContextData'
import Product from './Product'
import Category from './Category'
import { Cat } from '../../public/Data/Cat'
import { useEffect } from 'react'
import {AnimatePresence,motion } from 'framer-motion'
import Hero from './Hero'
import { Link } from 'react-router-dom'


const Container = styled.div`
width: 100%;
height: 100%;
text-align: center;
`

const Grid = styled.div`
width: 80%;
height : 100%;
margin-top: 4rem;
display: grid;
grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
justify-content: center;
align-items: center;
gap : 1rem;
margin: 5rem auto;
`
const ProductsDiv = styled.div`
width: 100%;
height: 100%;
overflow: hidden;
border-radius: 10px;
`

const CatContainer = styled(motion.div)`
width:80%;
height: 100%;
margin: auto;
padding-bottom: 3rem;
text-align: center;
z-index: 100;
h3{
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
}
p{
  font-size: 1.2rem;
}

@media screen and (max-width : 768px){
  width : 100% ;
  flex-wrap: wrap;
  
}
`
const FlexCat = styled.div`
padding-top: 2rem ;
/* background: #000; */
width: 90%;
height :100%;
display:grid;
grid-template-columns:repeat(auto-fit,minmax(300px , 1fr));
margin :auto ;
z-index: 101;
gap: 2rem;
`
const Div = styled.div`
width: 300px;
height:400px;
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
height:400px;
margin: auto;
display: flex;
border-radius: 10px;
transition: all 0.2s ease-in-out;
&:hover{
  transform :scale(1.2);
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
 background: rgba(0,0,0,0.6);
 transition: all 0.4s ease-in-out;
}
h3{
 font-size: 1.6rem;
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
  // const [newdata,setNewData] = useState([])
  
  // useEffect(()=>{
  // setNewData(data)  
  // },[data])
  
  
//   const Filter = (id,cat) => {
//   const categoryData = data.filter((item)=>item.category === cat)
//   if (id === 0) {
//     setNewData(data)
//   } else {
//     setNewData(categoryData)
//   }
// }

 

// onClick={()=>Filter(item.id,item.cat)}

  return (
    <Container>
        <Hero />
        <CatContainer> 
      <h3>Categories</h3>
      <p>Explore our categories and find the best products for you</p>
       <FlexCat>
      {Cat.map((item,index)=>{
     return (
      <Div key={index} >
        <Link to={`/category/${item.cat}/`}>
       <CategoryDiv>
         <img src={item.image} alt="" />
         <Contraste>
         <h3>{item.cat}</h3>
         </Contraste>
       </CategoryDiv>
        </Link>
      </Div>
     )
     
    })}
    </FlexCat>
  </CatContainer>
        <h3 style={{fontSize:'2rem' , fontWeight:'900'}}>Products</h3>
        <Grid>
         {data.map((product,index)=>{
            return (
              // <AnimatePresence key={index}>
              //  <motion.div 
              //     layout
              //     key={product.id}
              //     initial={{opacity : 0}}
              //     animate={{opacity : 1}}
              //     exit={{opacity : 0}}
              //     transition={{
              //       duration : 0.3
              //     }}
              //  >
                <ProductsDiv  >
                        <Product product={product} />
                </ProductsDiv>
              //  </motion.div>
              // </AnimatePresence>
            )
         })}
        </Grid>
    </Container>
  )
}

export default Products