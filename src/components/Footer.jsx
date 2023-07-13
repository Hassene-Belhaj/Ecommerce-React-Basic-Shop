import React from 'react'
import { BsSend } from 'react-icons/bs'
import styled from 'styled-components'
import { motion ,useAnimation } from 'framer-motion'
import { useInView} from 'react-intersection-observer'
import { useEffect } from 'react'


const Container = styled(motion.div)`
width: 100%;
height: auto;
background: ${({theme})=>theme.background};
color: ${({theme})=>theme.color};
padding: 2rem 0;
border-top: .1px solid rgba(180,180,180,0.5);
`

const Grid = styled.div`
padding-top:2rem ;
width: 90%;
display: grid;
grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
margin: auto;
gap: 3rem;
span{
    text-align: center;
}


@media screen and (max-width : 768px) {
span{
grid-column: span 2 / 3;
}
@media screen and (max-width : 872px) {
    grid-template-columns: 1fr 1fr;

}
}
`
const FooterCol = styled.div`
width:auto;
display: flex;
flex-direction: column;
justify-content: start;
align-items: center;
gap:1.2rem;
h4{
    font-size: 1.1rem;
}

`

const Form = styled.div`
width: 100%;
text-align: center;
gap: 1rem;
position: relative;
input{
    margin: 1rem 0;
    width: 90%;
    height: 2.5rem;
    border-radius: 5px;
    border: 1px solid lightgray; 
    &::placeholder{
    padding-left: .5rem;
    color: #000;
}  

}
label{
    font-size: 1.1rem;
    font-weight: 700;
}

@media screen and (max-width : 768px) {
    grid-column: span  2 / 3;
    
}
`

const SendIcon = styled.button`
width: 3rem;
height: 2.2rem;
position: absolute;
top: 2.5rem;
right: .1rem;
border: none;
background: none;
cursor: pointer;
border-radius: 3px;

@media screen and (max-width : 768px) {
    grid-column: span  2 / 3;
    top: 2.5rem;
    right: 2rem;
    
}
`




const Footer = ({FooterData}) => {

const {ref,inView} = useInView()
const animation = useAnimation()


useEffect(()=>{
if(inView){
    animation.start('visible')
} else {
    animation.start('hidden')
}    

},[inView])

  return (
    <Container ref={ref}
    variants={{
     hidden : {opacity : 1, x : -100} ,
     visible : {opacity : 1 , x : 0 }   
    }}
    initial='hidden'
    animate={animation}
    transition={{
         delay : 0.2 ,
        duration : 1.5 ,
        type : 'spring' ,
        bouce : 0.2

    }}
     >
      <Grid>
          <span><h3>React Shopping</h3></span>
        {FooterData.map((element,index)=>{
            return (
                <FooterCol key={index}>
                 <h4>{element.title}</h4>   
                 {element.subtitle.map((element,index)=>{
                    return (
                        <p key={index} style={{color:'gray'}}>{element.title}</p>
                    )
                 })}
                </FooterCol>
            )
        })}
         <Form>
            <form onClick={e=>e.preventDefault()}>
                    <label htmlFor="">Subscribe to our newsletter</label>
                    <input type="email"  placeholder='reactshopping@react.com' />
                    <SendIcon>
                        <BsSend size={18}/>
                    </SendIcon>
                    
                      
            </form>
         </Form>
      </Grid>
    </Container>
  )
}

export default Footer