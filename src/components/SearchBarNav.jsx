import React, { useCallback } from 'react'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import styled from 'styled-components'
import ContextData, { useContextData } from '../Context/ContextData'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'




const Container = styled.div`
width: 100%;
height: 100vh;
position: fixed;
inset: 0;
background : rgba(0,0,0,0.95);
backdrop-filter: blur(.4rem);
z-index: 6000;
`
const FlexContainer = styled.div`
width: 100%;
height: 50% ;
display: flex;
justify-content: center;
padding : 10rem;
`
const InputContainer = styled.div`
width: 300px;
height: 2rem;
position: relative;
input{
  width: 300px;
  height: 2rem;
  border-top-left-radius:7px ;
  border-top-right-radius:7px ;
  border-bottom-left-radius:${({searchTerm})=>searchTerm? null : '7px'};
  border-bottom-right-radius:${({searchTerm})=>searchTerm? null : '7px'};
  padding-left: 1.5rem; 
  outline: none;
  border: none;
  ::placeholder{
  padding-left: .3rem;
  color: #000;
  font-weight: 700;
  font-weight: 700;
  }
}
`
const ResultDiv = styled.div`
width: 100%;
height: ${({searchTerm})=>searchTerm? 'auto' : null};
color: #000;
background: #fff;
margin-top: .1rem;
border-bottom-left-radius: 7px;
border-bottom-right-radius: 7px;
border: none;
`
const ResultItem = styled.div`
width: 100%;
height: auto;
background: #fff;
padding:.5rem;
border-bottom: 1px solid rgba(0,0,0,0.2);
`


const SearchBar = styled.div`
width: 300px;
height: 2rem;
display: flex;
border-radius: 5px;
/* margin-left: 3rem; */
position: absolute;
top: 50%;
transform: translateY(-50%);
right: 120px;
input{
  width: 100%;
  border-radius: 5px;
  border: 1.5px solid ${({theme})=>theme.color};
  background: ${({theme})=>theme.background};
  padding-left: 1.5rem;
  outline: none;
  font-weight: 700;
  cursor: pointer;
::placeholder{
  padding-left: .3rem;
  color: ${({theme})=>theme.color};
}
}
@media screen and (max-width : 768px){
width: 40%;
justify-content: center;  
margin-left:4rem;
}
`

const SearchIcon = styled(AiOutlineSearch)`
position: absolute;
top: 50%;
transform:translateY(-50%);
left: ${({left})=>left};
fill: ${({theme})=>theme.color};
`

const SearchBarNav = () => {
    const [toggle,setToggle] = useState(false)
    const [searchTerm , setSearchTerm] = useState('')
    const [data] = useContextData()


    const searchToggle = () => {
      setToggle(!toggle) 
      setSearchTerm('')
    }
    
  const keypress = useCallback((e)=>{
  if(e.key === 'Escape') {
    setToggle(false)
  }


  },[])

  useEffect(()=>{
  document.addEventListener('keydown' , keypress) ;
  return () => document.removeEventListener('keydown' , keypress)
  },[keypress])




  return (   
  <>
  {toggle ?  
  <Container>
     <FlexContainer>
       <AiOutlineClose style={{position:'absolute',top:'0',right:'0',margin:'1rem'}} onClick={searchToggle} color='#fff' />
        <InputContainer searchTerm={searchTerm? 1 : 0}>
            <motion.div
              initial={{opacity : 0 , scale : 0}}
              animate={{opacity : 1 ,scale : 1}}  
              exit={{opacity : 0 , scale : 0}}       
              transition={{
                duration : 0.5 ,
                type : 'spring' ,
                bounce : 0.3
              }}
         >
          <input type="text" value={searchTerm} onChange={e=>setSearchTerm(e.target.value)} placeholder='Search products'/>
       <SearchIcon left={'.4rem'} color='#000' />
          </motion.div>
          <ResultDiv searchTerm={searchTerm? 1 : 0}>

            {data.filter((item)=>{
              if(searchTerm == "" ) {
                  return null
                } else if(item.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return item 
                } 
              }).map((item,index)=>{
                return (
                  <ResultItem key={index}>
                      <h4 >
                        <Link to={`/product/${item.id}/`} onClick={searchToggle} style={{textDecoration:'none',color:'#000' ,cursor:'pointer'}} >
                          {item.title}
                        </Link>
                        </h4>
                    </ResultItem>
                     ) 
                    })} 
        </ResultDiv>
        
         
       </InputContainer>
     </FlexContainer>
  </Container>  
  :   
  <SearchBar >
      <input type="text" placeholder='Search products' onFocus={searchToggle} />
       <SearchIcon left={'.4rem'}/>
  </SearchBar>}

  </>  
  )
}

export default SearchBarNav