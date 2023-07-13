import React from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column;
width: auto;
height: 100%;
margin: .5rem 1rem;
line-height: 2rem;
h2,h3{
    margin-bottom: .5rem;
    text-align: center;
}
p{
    padding-bottom    :1rem ;
    border-bottom : 1px solid rgba(180,180,180,0.5);
    text-align: center;
}
`
const ContactInformation = styled.div`
margin: auto;
width: auto;
height: 100%;
text-align: left;
h3{
    margin: 1rem 0;
}
li{
    margin: .5rem 0; 
}
`
const BottomDiv = styled.div`
padding-bottom: 2rem;
width: 500px;
margin: auto;
height: auto;
display: flex;
justify-content:space-between;
align-items:center;
a{
    text-decoration: none;
    color: inherit;
    font-weight: 700;
    transition :all 0.2s ease-in-out ; 
&:hover{
    transition :all 0.2s ease-in-out ; 
    color: indigo;
}    
}
`
const Span = styled.span`
display: flex;
justify-content: center;
align-items: center;
margin-top: 1rem;
`


const Contact = () => {
  return (
   <Container>
    <h2>Contact</h2>
     <h3>Contact us for any questions or concerns about React Shopping.</h3>
    <p>
    If you have any questions or concerns about React Shopping, please contact us using one of the methods below. We will try to respond as soon as possible.
    </p>
    <ContactInformation>
        <h3>Contact Information</h3>
        <ul >
            <li><strong>Email : </strong> hassene.belhaj@gmail.com</li>
            <li><strong>Twitter : </strong>hassene.belhaj</li>
            <li><strong>LinkedIn : </strong>hassene.belhaj</li>
            <li><strong>Git : </strong>hassene.belhaj</li>
        </ul>
    </ContactInformation>
    <BottomDiv>
      <Link>
       <Span><BiChevronLeft />About</Span>       
      </Link>
      <Link>
       <Span>Privacy Policy<BiChevronRight /></Span>       
      </Link>
    </BottomDiv>
   </Container>
  )
}

export default Contact