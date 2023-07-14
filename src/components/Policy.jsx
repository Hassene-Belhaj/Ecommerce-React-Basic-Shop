import React from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
width: 50%;
height: 100%;
margin: auto;
display: flex;
flex-direction: column;
align-items: start;
line-height: 2rem;

h3{
    width :100% ;
    font-size: 1.5rem;
    padding: 1rem 0;
    border-bottom: solid 1px rgba(180,180,180,0.5) ;
}
ul{
    margin:auto;
    padding: 1rem 1rem ;
    text-align: left;
}
`
const BottomDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
padding-bottom: 2rem;
margin:2rem auto;
a{
    text-decoration: none;
    color: inherit;
    font-weight: 700;
    transition :all 0.2s ease-in-out ; 
&:hover{
    transition :all 0.2s ease-in-out ; 
    opacity: 0.8;
}    
}
`
const Span = styled.span`
display: flex;
justify-content: center;
align-items: center;
margin-top: 1rem;
`


const Policy = () => {
  return (
    <Container>
        <h3>Privacy Policy</h3>
        <h4>This is the privacy policy for React Shopping.</h4>
        <h3>What information do we collect?</h3>
        <p>We collect information from you when you register on our site, place an order, subscribe to our newsletter or fill out a form.
        When ordering or registering on our site, as appropriate, you may be asked to enter your: name, e-mail address, mailing address, phone number or credit card information.
        You may, however, visit our site anonymously.</p>
        <h3>What do we use your information for?</h3>
        <p>Any of the information we collect from you may be used in one of the following ways:</p>
        <ul>
            <li>To personalize your experience (your information helps us to better respond to your individual needs)</li>
           <li>To improve our website (we continually strive to improve our website offerings based on the information and feedback we receive from you)</li>
           <li>To improve customer service (your information helps us to more effectively respond to your customer service requests and support needs)</li>
           <li>To process transactions</li>
           <li>To administer a contest, promotion, survey or other site feature</li>
           <li>To send periodic emails</li>
        </ul>
        <p>The email address you provide for order processing, may be used to send you information and updates pertaining to your order, in addition to receiving occasional company news, updates, related product or service information, etc.
        Note: If at any time you would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email.</p>
        <h3>Do we use cookies?</h3>
        <p>Yes (Cookies are small files that a site or its service provider transfers to your computers hard drive through your Web browser (if you allow) that enables the sites or service providers systems to recognize your browser and capture and remember certain information).

We use cookies to help us remember and process the items in your shopping cart, understand and save your preferences for future visits, keep track of advertisements and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future. We may contract with third-party service providers to assist us in better understanding our site visitors. These service providers are not permitted to use the information collected on our behalf except to help us conduct and improve our business.

If you prefer, you can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies via your browser settings. Like most websites, if you turn your cookies off, some of our services may not function properly. However, you can still place orders by contacting customer service.</p>
<BottomDiv>
      <Link to={'/contact'}>
       <Span><BiChevronLeft />Contact</Span>       
      </Link>
      <Link to={'/policy'}>
       <Span>Terms & Conditions<BiChevronRight /></Span>       
      </Link>
    </BottomDiv>
    </Container>
  )
}

export default Policy