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
import Category from './components/Category'
import Shop from './components/Shop'


const Container = styled.div`
width : 100% ;
height : 100% ;
overflow: hidden;
`

const dark = {
  background : '#1A1A1A' ,
  color : '#fff' ,
}

const light = {
  background : '#fff' ,
  color : '#1A1A1A' ,
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
               <Routes>
                 <Route path='/category/:cat/' element={<Category />} />
                 <Route path='/' element={ <Products /> } />                 
                 <Route path='/product/:id' element={ <ProductPage /> } />                             
                 <Route path='/contact' element={ <Contact/> } />
                 <Route path='/policy' element={ <Policy/> } />                                    
                 <Route path='/shop' element={ <Shop/> } />                                    
                 <Route path='/signin' element={ <Signin/> }/>
              </Routes>        
                <Cart/>
                <Modal />
                <Footer FooterData={FooterData}/>
                <DarkLight theme={theme} toggleTheme={toggleTheme}/>
            </Container>
          </ThemeProvider>
    </Router>


    )
}

export default App