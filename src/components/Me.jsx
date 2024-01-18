import styled from '@emotion/styled';
import { Typography, keyframes } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { FaRegHandSpock } from 'react-icons/fa';
import { me } from '../data';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  // border: 2px solid red;
  margin-top: 100px;
  min-height: 80vh;
  width: 100vw;
  flex-direction:column;

@media screen and (max-width:500px){
  margin-top:50px;
}
`;

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  // border: 2px solid red;
  justify-content: space-between;
  // flex-wrap:wrap;
  align-items:center;

  @media screen and (max-width: 480px) {
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 882px) {
    flex-direction: column-reverse;
  }
`;

const tilt = keyframes`
from{
  transform: rotate(-25deg);
}
to{
  transform: rotate(10deg);
}
to{
  transform: rotate(0deg);
}
`

const AboutMe = styled.div`
  flex: 1.5;
  // border: 2px solid green;
  height:200px;
  // text-align:center;

  @media screen and (max-width:500px){
    // height:900px;
    // border:1px solid red;
  }
`;

const ImgCont = styled.div`
  flex: 1;
  display:flex;
  // align-items:center;
  // justify-content:center;
  // border: 2px solid yellow;

@media screen and (max-width:500px){
  margin-bottom:50px;
  align-items:center;
  justify-content:center;
}
`;

const Layer = styled.div`
position:absolute;
top:0;
left:0;
height:100%;
width:100%;
border-radius:50%;
background-color:black;
opacity:0.4;
`

const Span = styled.span`
display:inline-block;
animation : ${tilt} 1s ease-in-out infinite;
// animation-delay:2s;
`

const TypeWriterAnimation = keyframes`
from{
  width:0
}
to{
  width:200px;
}
`

const TypeWritterText = styled(Typography)`
// border:2px solid red;
color:white;
overflow:hidden;
white-space:nowrap;
// animation: ${TypeWriterAnimation} 4s steps(40) infinite;
// border-right: 2px solid white;
display:none;

@media screen and (max-width:500px){
  display:inline-block;
  // align-self:flex-end;
  // margin-top:auto;
  // justify-self:flex-end;
  margin-top:100px;
}
`

const ImgContainer = styled.div`
position:relative;
width:400px;
height:400px;

@media screen and (max-width:500px){
  width:150px;
  height:150px
}
`

const Img = styled.img`
width:100%;
height:100%;
border-radius:50%;
`;

const Me = () => {
  const currentIndex = useRef(0)
  const [currentText, setCurrentText] = useState("")

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentString = me[currentIndex.current];
      setCurrentText((prevText) => {
        const nextChar = currentString.charAt(prevText.length);
        if (nextChar) {
          return prevText + nextChar;
        } else {
          currentIndex.current = (currentIndex.current + 1) % me.length;
          return "";
        }
      });
    }, 150); // Adjust the interval duration as needed

    return () => {
      clearInterval(intervalId);
    };
  }, [currentText]);


  return (
    <Container id='me'>
      <Wrapper>
        <AboutMe>
          <Typography variant='h4'>HI THERE ,
          <Span>
          <FaRegHandSpock/>
          </Span>
          </Typography>
          <Typography variant='h4'>I'M <span style={{ color: 'purple' }}>NEERAJ PANT,</span></Typography>
          <Typography variant='h4' color={'white'} marginTop={'50px'} sx={{"@media (max-width:500px)":{
            fontSize:"20px;"
          }}}>
            {currentText} <span style={{color:"purple"}}>!</span>
          </Typography>
        </AboutMe>
        <ImgCont>
        <ImgContainer>
        <Layer />
          <Img src='https://firebasestorage.googleapis.com/v0/b/video-e795c.appspot.com/o/WhatsApp%20Image%202024-01-12%20at%2021.27.35.jpeg?alt=media&token=e719849e-aa60-464b-a543-4d2a8f2edf00' alt='profile.img' />
        </ImgContainer>
        </ImgCont>
      </Wrapper>
      {/* <Typography variant='h5'>"Welcome to my tech universe, where ideas transform into digital reality."</Typography> */}
      <TypeWritterText marginTop={"50px"}>WELCOME TO MY WORLD...</TypeWritterText>
    </Container>
  );
};

export default Me;
