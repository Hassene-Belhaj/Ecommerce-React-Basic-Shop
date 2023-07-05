import React from 'react'
import { styled } from 'styled-components'
import { useContextData } from '../Context/ContextData'
import Product from './Product'


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





const Products = () => {

  const [data] =   useContextData()
  console.log(data);

  return (
    <Container>
        <h3>Products</h3>
        <Grid>
         {data?.map((product,index)=>{
            return (
                <ProductsDiv key={index} >
                        <Product product={product} />
                </ProductsDiv>
            )
         })}
        </Grid>
    </Container>
  )
}

export default Products