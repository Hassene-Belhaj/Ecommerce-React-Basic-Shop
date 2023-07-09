import React from 'react'
import { styled } from 'styled-components'
import { MdDone } from 'react-icons/md'
import { useContextCart } from '../Context/ContextCart'
import { useEffect } from 'react'
import { useState } from 'react'

const Container = styled.div`
position: fixed;
width: 100%;
height: ${({$modal})=> $modal?  '100vh' : 0  };
top:0;
bottom: 0;
left: 0;
bottom: 0;
z-index: 5000;
background:rgba(0,0,0,0.6);
transition: all 0.1s ease-in-out;
`
const ModalDiv = styled.div`
position: absolute;
top: 5rem;
right:${({$modal})=>$modal ?  '2rem' : '-100%' };
transition: all 0.3s ease-in-out;
width: 400px;
height: 100px;
margin: auto;
background:#fff;
color: #000;
border-radius: 8px;
h3{
    text-transform: capitalize;
    font-size: 1rem;
    padding: .7rem;
}
`
const FlexDiv = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
align-items: center;
margin-top: .7rem;
`


const ButtonDiv = styled.div`
width: 100%;
display: flex;
button{
    margin: auto;
    cursor: pointer;
    width: 60%;
    height: 2rem;
    border: none;
    border-radius: 7px;
    font-weight: 800;
    background: #000;
    color: #fff;
    &:hover{
     opacity:0.9;
     transition:all 0.3s ease-in-out;  
}
}
`



const Modal = () => {
  const {bag,addtoCart} =  useContextCart()
  const [modal,setModal] = useState(false)
 
  useEffect(()=>{
    if(bag){
      setModal(true)
    }
    
  },[bag])
  
  useEffect(()=>{
  const timeout = setTimeout(() => {
  if(modal){
    setModal(false)
  }
  }, 2800);
  return () => clearTimeout(timeout)

  },[modal])


  return (
    <Container $modal={modal}>
        <ModalDiv $modal={modal}>

           <FlexDiv>
                <h3>Item Added To Cart </h3>
                <span style={{marginLeft:'.5rem'}}>
                    <MdDone color='green' size={25}/>
                </span>
           </FlexDiv>

          <ButtonDiv>
            <button>Go To Cart</button>
         </ButtonDiv>

        </ModalDiv>
            
    </Container>
  )
}

export default Modal