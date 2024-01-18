import * as React from 'react';
import "./styles/nav.css"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
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

export default function Navbar({names}) {
  const navigate = useNavigate();

  const scrollBehaviour = (id) =>{
    const elem = document.getElementById(`${id}`)
    elem.scrollIntoView({behavior:"smooth"})
  }

  return (
    <div className="Navbar">
        <Box sx={{ flexGrow: 1,}}>
      <AppBar position="static" sx={{backgroundColor:"rgb(61, 22, 61, 0.5)", padding:"12px 0px","@media (max-width:450px)":{
        backgroundColor:"rgba(61, 22, 61, 0.5)"
      },backdropFilter:"blur(10px)"}}>
        <Toolbar sx={{justifyContent:"space-between"}}>
          <Image src='https://firebasestorage.googleapis.com/v0/b/video-e795c.appspot.com/o/WhatsApp%20Image%202024-01-12%20at%2021.27.35.jpeg?alt=media&token=e719849e-aa60-464b-a543-4d2a8f2edf00' />
          <Container>

        
            <Typography sx={{cursor:"pointer","@media (max-width:450px)":{
              fontSize:"14px"
            }}} onClick={()=>scrollBehaviour("intro")}>About</Typography>

          
            <Typography sx={{cursor:"pointer","@media (max-width:450px)":{
              fontSize:"14px"
            }}} onClick={()=>scrollBehaviour("contact")}>Contact</Typography>

            
            <Typography sx={{cursor:"pointer","@media (max-width:450px)":{
              fontSize:"14px"
            }}} onClick={()=>scrollBehaviour("projects")}>Projects</Typography>

            
            <Typography sx={{cursor:"pointer","@media (max-width:450px)":{
              fontSize:"14px",
              display:"none"
            }}} onClick={()=>scrollBehaviour("skills")}>Skills</Typography>

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
