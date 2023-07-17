import React from 'react'
import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import styled from 'styled-components'
import ContextData, { useContextData } from '../Context/ContextData'

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
transform: translateY(-50%);
left: 4px;
fill: ${({theme})=>theme.color};
`

const SearchBarNav = () => {
    const [val,setValue] = useState('')
    const [result,setResult] = useState()
    const [data] = useContextData()
    console.log(val);



  return (
    <SearchBar >
    <input type="text" value={val} onChange={e=>setValue(e.target.value)} placeholder='Search products' />
  <SearchIcon />
</SearchBar>
  )
}

export default SearchBarNav