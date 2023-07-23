import React from 'react'
import styled from 'styled-components'
import { Cat } from '../../public/Data/Cat'
import { useContextData } from '../Context/ContextData'
import { useParams } from 'react-router'
import Product from './Product'
import { BsFillGridFill } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'
import { useContextCart } from '../Context/ContextCart'
import ProductsList from './ProductsList'
import { BiSolidGridAlt } from 'react-icons/bi'


const Container = styled.div`
width: 100%;
height: 100%;
`
const Grid = styled.div`
width: 80%;
height: 100%;
display: grid;
grid-template-columns: repeat(auto-fit , minmax(280px , 1fr));
justify-content: center;
align-items: center;
margin:5rem auto;
gap: 2rem;
`
const Flex = styled.div`
width: 80%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
margin: auto;
gap: 1rem;
`



const IconSpan = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin: 2rem 0;
`

const Category = ({}) => {
 const [data] = useContextData()
 const {display,setDisplay} = useContextCart()

const {cat} = useParams()

const products = data.filter((item)=>{ 
if (cat  === 'All'){
  return data
} else if (item.category === cat){
  return item
}

})



console.log(products);

if (!products[0]?.title)  return ( <h4 style={{textAlign:'center',margin:'2rem auto',textTransform:'capitalize'}}>loading page...</h4> )

return (
    <Container>
     <h1 style={{textAlign:'center',fontSize:'1rem'}}>{cat}</h1>
     <IconSpan>
      <BiSolidGridAlt onClick={()=>setDisplay(true)} style={{marginRight:'1rem',cursor:'pointer'}}  size={25}/>
      <AiOutlineMenu  onClick={()=>setDisplay(false)} size={25} style={{cursor:'pointer'}}/>
     </IconSpan>
     {display ?  < Grid>
     {products.map((product,index)=>{
       return (
         <>
        <Product key={index} product={product} /> 
        
         </>
         
         )
        })}
        </Grid> : 
      <Flex> {products.map((product,index)=>{
       return (
         <>
         <ProductsList key={index} product={product} /> 
        
         </>
         
         )
        })}</Flex>}
    
    </Container>
  )
}

export default Category