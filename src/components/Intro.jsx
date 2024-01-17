import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react'

const Wrapper = styled.div`
display:flex;
align-items:center;
// border:2px solid red;
align-items:center;
justify-content:center;
margin-top:100px;
min-height:100vh;

@media screen and (max-width:450px){
  margin-top:120px;
}
`
const Container = styled.div`
// border: 2px solid yellow;
display:flex;
width: 80%;
flex-wrap:wrap;
// flex-direction:column;

@media screen and (max-width:450px){
  // flex-direction:column;
  flex-direction: column-reverse;
}
`
const Introcont = styled.div`
display:flex;
flex-direction:column;
// border:2px solid pink;
flex:1;
align-items:center;
gap:20px;
`
const AvatarCont = styled.div`
display:flex;
flex:1;
align-items:center;
justify-content:center;
// border:1px solid red;

@media screen and (max-width:450px){
  display:none;
}
`
const Img = styled.img`
width:80%;
// height:60%;
`

const Intro = () => {
  return (
    <Wrapper>
      <Container>
        <Introcont>
          <Typography sx={{ display: "flex", gap: "8px" }} variant='h4' color={"white"}>KNOW WHO <Typography variant='h4' color={"purple"}> I'm</Typography></Typography>
          <Typography marginTop={"20px"} fontSize={"18px"} sx={{"@media (max-width:500px)":{
          fontSize:"16px"
        }}}>
            Hello there!,  <br></br> <span style={{color:"purple"}}>I'm Neeraj Pant</span>, a passionate individual currently on the exciting journey of pursuing a Bachelor's degree in Computer Science and Engineering. As I approach the culmination of my academic endeavors this year, I am eagerly anticipating the next chapter of my professional adventure.
          </Typography>


            <Typography marginTop={"10px"} fontSize={"18px"} sx={{"@media (max-width:500px)":{
          fontSize:"16px"
        }}}>
            I'm passionate about <span style={{color:"purple"}}>Full Stack Web Development</span>, specializing in the MERN stack. With proficiency and creativity, I'm eager to bring dynamic web solutions to life. Ready to embark on the next exciting chapter as a Full Stack Web Developer!
            </Typography>

            <Typography marginTop={"10px"} fontSize={"18px"} sx={{"@media (max-width:500px)":{
          fontSize:"16px"
        }}}>
            Join me as I transition from the academic arena to the vibrant world of Full Stack Web Development, where innovation and passion converge to create remarkable digital experiences!
            </Typography>
        </Introcont>
        <AvatarCont>
          <Img src='/avatar.png' />
        </AvatarCont>
      </Container>
    </Wrapper>
  )
}

export default Intro
