import React, { useState } from 'react'
import {ThemeProvider, styled } from 'styled-components'
import { GlobalStyle} from './components/Global'
import Navbar from './components/Navbar'
import DarkLight from './components/DarkLight'
import Hero from './components/Hero'
import Main from './components/Main'
import Products from './components/Products'
import { Cat } from '../public/Data/Cat'
import { Navigation } from './utils/Const'


const Container = styled.div`
width : 100% ;
height : 100% ;
`

const dark = {
  background : '#000' ,
  color : '#fff' ,
}

const light = {
  background : '#fff' ,
  color : '#000' ,
}


const App = () => {
const [theme , setTheme] = useState('dark')

const toggleTheme = () => {
theme === 'dark' ? setTheme('light') : setTheme('dark')
}

  return (
    <ThemeProvider theme={theme ==='dark' ? light : dark}>
    <GlobalStyle />
       <Container >
        {/* {theme==='dark' ? <button onClick={toggleTheme}><ToggleOn/></button> : <button onClick={toggleTheme}><ToggleOf/></button> } */}
       <Navbar Navigation={Navigation} />
        <DarkLight theme={theme} toggleTheme={toggleTheme}/>
         <Hero />
         <Main Cat={Cat} />
         <Products/>
      </Container>
    </ThemeProvider>


    )
}

export default App