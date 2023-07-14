import React from 'react'
import styled  from 'styled-components'
import { MdDone } from 'react-icons/md'
import { useContextCart } from '../Context/ContextCart'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'

const Container = styled.div`
position: fixed;
width: 100%;
height: ${({$modal})=> $modal?  '100vh' : 0  };
top:0;
bottom: 0;
left: 0;
bottom: 0;
z-index: 5000;
/* transition: all 0.1s ease-in-out; */
`
const ModalDiv = styled.div`
position: absolute;
top: 5rem;
right:${({$modal})=>$modal ?  '2rem' : '-200%' };
transition: all 0.4s ease-in-out;
width: 300px;
height: 150px;
margin: auto;
background:#fff;
color: #000;
border-radius: 8px;
box-shadow: 1px 1px 1px rgba(180,180,180,0.9);
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
flex-direction: column;
button{
    margin: .3rem auto;
    cursor: pointer;
    width: 80%;
    height: 2rem;
    border: none;
    border-radius: 7px;
    font-size:.8rem;
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
  const {bag,addtoCart,isopen,setIsOpen,handleClickCart} =  useContextCart()
  const [modal,setModal] = useState(false)
 
  useEffect(()=>{
    if(bag && !isopen){
      setModal(true)
    } else if (bag === 0) {
        setModal(false)
    } else if(handleClickCart){
      setModal(false)
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
               <button onClick={()=>setModal(false)}>Continue</button>
               <button onClick={handleClickCart}>Go To Cart</button>
         </ButtonDiv>

        </ModalDiv>
            
    </Container>
  )
}

export default Modal