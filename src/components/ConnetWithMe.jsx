import styled from '@emotion/styled'
import { Button, Typography } from '@mui/material'
import React, { useRef } from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const Wrapper = styled.div`
display:flex;
align-items:center;
flex-direction:column;
min-height:90vh;
// border:2px solid red;
// justify-content:center;
gap:20px;
margin-top:20px;

@media screen and (max-width:500px){
    // border:1px solid red;
    gap:0px;
margin-top:40px;

}
`
const Form = styled.form`
display:flex;
border:1.5px solid purple;
width:500px;
flex-direction:column;
gap:20px;
padding:23px;
border-radius:10px;

@media screen and (max-width:500px){
    border:none;
    width:95%;
    align-items:center;
}
`
const Input = styled.input`
border:1px solid purple;
padding:15px 10px;
outline:none;
background-color: transparent;
color:white;
border-radius:6px;

&::placeholder{
    color:grey;
}

@media screen and (max-width:500px){
    width:85%;
}
`
const TextArea = styled.textarea`
border:1px solid purple;
padding:15px 10px;
outline:none;
background-color: transparent;
color:white;
border-radius:6px;
resize:none;
height:100px;

&::placeholder{
    color:grey;
}

@media screen and (max-width:500px){
    width:85%;
}
`
const Social = styled.div`
// border:2px solid red;
width:900px;
display:flex;
align-items:center;
flex-direction:column;
margin-top:20px;
gap:20px;
`
const SocialLinks = styled.div`
display:flex;
// border:2px solid green;
gap:20px;
`
const SocialLink = styled.span`
font-size:30px;
cursor:pointer;
color:white;

@media screen and (max-width:500px){
    font-size:29px;
    color:grey;
}
`

const ConnetWithMe = () => {
    const form = useRef()   
    // serviceId = "service_btlgfir"

    const sendMail = (e)=>{
        e.preventDefault();
        const templateParams = {
            user_name: form.current.user_name.value,
            user_email: form.current.user_email.value,
            message: form.current.message.value,
          };
        emailjs.sendForm('service_btlgfir', 'template_6nt6pgs', form.current, '3nuOlyXx9eTS9edhK')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        console.log(templateParams)
    }

  return (
    <Wrapper>
        <Typography variant='h5' textAlign={"center"} textTransform={"uppercase"}>Reach Out to Me</Typography>
        <Form ref={form} onSubmit={sendMail}>
            <Input placeholder='enter your name' type='text' name="from_name" autoComplete='off'/>
            {/* <Input placeholder='add message..' autoComplete='off'/> */}
            <Input placeholder='enter your email' type="email" name="from_email" autoComplete='off'/>
            <TextArea placeholder='type your message..' name="message" />
            <Button type='submit' variant='contained' sx={{backgroundColor:"rgb(61, 22, 61)", ":hover":{
                backgroundColor:"purple"
            }, padding:"10px 10px", "@media (max-width:500px)":{
                width:"90%"
            }}}>SEND MAIL</Button>
        </Form>
        <Social>
            <Typography fontSize={"18px"} color={"rgb(98, 58, 98)"} sx={{"@media (max-width:500px)":{
                width:"300px",
                textAlign:"center",
                fontSize:"16px"
            }}}>Discover more ways to connect through my additional social links!</Typography>
            <SocialLinks>
                <SocialLink><FaLinkedin /></SocialLink>
                <SocialLink><FaGithubSquare /></SocialLink>
                <SocialLink><FaInstagramSquare /></SocialLink>
                <SocialLink><FaTwitter /></SocialLink>
                <SocialLink><FaFacebookSquare /></SocialLink>
                </SocialLinks>
        </Social>
    </Wrapper>
  )
}

export default ConnetWithMe
