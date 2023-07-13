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
import ProductPage from './components/Page/ProductPage'
import Contact from './components/Contact'
import Policy from './components/Policy'

const Container = styled.div`
width : 100% ;
height : 100% ;
overflow: hidden;
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
               <Navbar Navigation={Navigation} />
                <DarkLight theme={theme} toggleTheme={toggleTheme}/>
               <Routes>
                 <Route path='/' element={ <Products/> } />                 
                 <Route path='/product/:id' element={ <ProductPage/> } />                             
                 <Route path='/contact' element={ <Contact/> } />
                 <Route path='/policy' element={ <Policy/> } />                                    
               </Routes> 
                <Cart/>
                <Signin />
                <Modal />
                <Footer FooterData={FooterData}/>
            </Container>
          </ThemeProvider>
    </Router>


    )
}

export default App