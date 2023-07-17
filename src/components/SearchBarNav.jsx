import React from 'react'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import styled from 'styled-components'
import ContextData, { useContextData } from '../Context/ContextData'

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

`
const SearchToggle = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
input{
  position:relative ;
  width: 300px;
  height: 2rem;
  border-radius:7px ;
  border: none;
  ::placeholder{
  padding-left: 1rem;
  }
}
`




const SearchBar = styled.div`
width: 25%;
height: 50%;
display: flex;
justify-content: center;
border-radius: 5px;
/* margin-left: 3rem; */
position: absolute;
top: 50%;
transform: translateY(-50%);
right: 120px;
input{
  width: 100%;
  border-radius: 5px;
  border: 2px solid ${({theme})=>theme.color};
  background: ${({theme})=>theme.background};
  padding-left: 1.5rem;
  outline: none;
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
position: ${({position})=>position} ;
top: ${({top})=>top};
transform: ${({transform})=>transform? 'translateY(-50%)' : null};
left: ${({left})=>left};
fill: ${({theme})=>theme.color};
`



const SearchBarNav = () => {
    const [val,setValue] = useState('')
    const [result,setResult] = useState()
    const [search , setSearch] = useState(false)
    const searchToggle = () => setSearch(!search) 
    const [data] = useContextData()
    console.log(val);
    console.log(search);



  return (   
  <>
  {search ?  
  <Container>
     <FlexContainer>
       <AiOutlineClose style={{position:'absolute',top:'0',right:'0',margin:'1rem'}} onClick={searchToggle} color='#fff' />
       <SearchToggle>
          <input type="text" value={val} onChange={e=>setValue(e.target.value)} placeholder='Search products' onFocus={()=>setSearch(true)} />
          <SearchIcon  />
       </SearchToggle>
     </FlexContainer>
  </Container>  
  :   
  <SearchBar >
      <input type="text" value={val} onChange={e=>setValue(e.target.value)} placeholder='Search products' onFocus={searchToggle} />
       <SearchIcon position={'absolute'} top={'50%'} transform='true' left={'.4rem'} />
  </SearchBar>}

  

  </>  
  )
}

export default SearchBarNav