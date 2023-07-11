import React, { useState } from 'react'
import styled , {ThemeProvider, } from 'styled-components'
import { GlobalStyle} from './components/Global'
import Navbar from './components/Navbar'
import DarkLight from './components/DarkLight'
import Hero from './components/Hero'
import Products from './components/Products'
import { FooterData, Navigation } from './utils/Const'
import { BrowserRouter as Router ,Routes , Route } from 'react-router-dom'
import Cart from './components/Cart'
import Modal from './components/Modal'
import Signin from './components/Signin'
import Footer from './components/Footer'

const Container = styled.div`
width : 100% ;
height : 100% ;
`

const dark = {
  background : '#030712' ,
  color : '#fff' ,
}

const light = {
  background : '#fff' ,
  color : '#030712' ,
}


const App = () => {
const [theme , setTheme] = useState('dark')

const toggleTheme = () => {
theme === 'dark' ? setTheme('light') : setTheme('dark')
}

  return (
    <Router>
          <ThemeProvider theme={theme ==='dark' ? light : dark}>
          <GlobalStyle />
              <Container >
                <Modal />
               <Navbar Navigation={Navigation} />
                <DarkLight theme={theme} toggleTheme={toggleTheme}/>
                <Hero />
                <Products/>
                <Cart/>
                <Signin />
                <Footer FooterData={FooterData}/>
            </Container>
          </ThemeProvider>
    </Router>


    )
}

export default App