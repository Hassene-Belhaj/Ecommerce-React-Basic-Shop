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
     <h1>category</h1>
   
    </Container>
  )
}

export default Category