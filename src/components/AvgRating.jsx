import React from 'react'
import { BsStarFill } from 'react-icons/bs'
import styled from 'styled-components'

const Ratingdiv = styled.div`
width: 100%;
height: 100%;
margin: 1rem auto;
display: flex;
justify-content: center;
`

const RatingFlex = styled.span`

` 
const RatingLikes = styled.span`

` 


const AvgRating = ({product}) => {
 const {avgRating,likes} =product
  return (
   <Ratingdiv>
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