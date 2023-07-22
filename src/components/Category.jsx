import React from 'react'
import styled from 'styled-components'
import { Cat } from '../../public/Data/Cat'
import { useContextData } from '../Context/ContextData'
import { useParams } from 'react-router'
import Product from './Product'


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


const Category = () => {
 const [data] = useContextData()

const {cat} = useParams()

const products = data.filter((item)=>{ 
if (cat  === 'All'){
  return data
} else if (item.category === cat){
  return item
}

})



console.log(products);

if(products?.title) return ( <Container><h1 style={{textAlign:'center',margin:'2rem 0'}}>... Loading Page</h1></Container>)
  return (
    <Container>
     <h1 style={{textAlign:'center',fontSize:'1rem'}}>{cat}</h1>
     <Grid>

     {products.map((product,index)=>{
       return (
         <Product key={index} product={product} />
         
         )
        })}
        </Grid>
    </Container>
  )
}

export default Category