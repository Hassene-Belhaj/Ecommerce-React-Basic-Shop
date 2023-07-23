import React from 'react'
import { BsStarFill } from 'react-icons/bs'
import styled from 'styled-components'

const Ratingdiv = styled.div`
width: 100%;
height: auto;
margin: 1rem auto;


`

const Customer = styled.div`

`

const RatingFlex = styled.span`

` 
const RatingLikes = styled.span`
` 


const AvgRating = ({product}) => {
 const {avgRating,likes} =product
 return (
     <Ratingdiv>
        <Customer>
          <h5 style={{color:'orange',margin:'.5rem 0',fontSize:'.8rem',wordSpacing:'.2rem'}}>Customer Revue</h5>
        </Customer>
   {Array.from({length : avgRating},(_,index)=>{
    return (
        <RatingFlex key={index}>
            <BsStarFill color='orange'/>
        </RatingFlex>
    )
   })}
   {Array.from({length : 5 - avgRating},(_,index)=>{
    return (
        <RatingFlex key={index}>
            <BsStarFill color='gray' />
        </RatingFlex>
    )
   })}
   </Ratingdiv>

    )
}

export default AvgRating