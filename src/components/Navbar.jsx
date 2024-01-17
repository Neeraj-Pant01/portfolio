import * as React from 'react';
import "./styles/nav.css"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const Image = styled.img`
height:50px;
width:50px;
border-radius:50%;

@media screen and (max-width: 450px){
  height:40px;
width:40px;
}
`
const Container = styled.div`
display:flex;
align-items:center;
gap:20px;
margin-left: 20px;
// border:2px solid red;
float:right;

@media screen and (max-width: 450px){
  font-size : 8px
}
`

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="Navbar">
        <Box sx={{ flexGrow: 1,}}>
      <AppBar position="static" sx={{backgroundColor:"rgb(61, 22, 61, 0.6)", padding:"5px 0px","@media (max-width:450px)":{
        backgroundColor:"rgba(61, 22, 61, 0.5)"
      },backdropFilter:"blur(10px)"}}>
        <Toolbar sx={{justifyContent:"space-between"}}>
          <Image src='myimg.jpeg' />
          <Container>
            <Typography sx={{cursor:"pointer","@media (max-width:450px)":{
              fontSize:"14px"
            }}}>About</Typography>
            <Typography sx={{cursor:"pointer","@media (max-width:450px)":{
              fontSize:"14px"
            }}}>Contact</Typography>
            <Typography sx={{cursor:"pointer","@media (max-width:450px)":{
              fontSize:"14px"
            }}}>Projects</Typography>
            <Typography sx={{cursor:"pointer","@media (max-width:450px)":{
              fontSize:"14px",
              display:"none"
            }}}>Skills</Typography>
            <Button variant='outline' sx={{"@media (max-width:450px)":{
              fontSize:"14px"
            }}} onClick={()=>navigate('/resume')}>Resume</Button>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}
