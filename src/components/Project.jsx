import styled from '@emotion/styled'
import { Stack, Typography } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const ProjectContainer = styled.div`
display:flex;
width:420px;
// border:2px solid white;
flex-direction:column;
transition: 0.2s linear;
cursor:pointer;
align-items:center;
// justify-content:center;
box-shadow: 0px 0px 10px rgb(98, 58, 98);
border-radius: 10px;
padding:10px 0px;
min-height:500px;

@media screen and (max-width:999px){
width:400px;
}

@media screen and (max-width:950px){
  width:300px;
  }

  @media screen and (max-width:730px){
    width:280px;
    }


&:hover{
    transform:scale(1.02);
    box-shadow: 0px 0px 12px purple;
}
`
const ProjectImage = styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:center;
margin-bottom:20px;
`
const Image = styled.img`
width:80%;
`

const Project = ({e}) => {
  const navigate = useNavigate()
  return (
    <ProjectContainer>
        <ProjectImage>
            <Image src='avatar.png'/>
        </ProjectImage>
        <Typography variant='h6' textAlign={"center"} color={"purple"}>{e.name}</Typography>
        <Typography textAlign={"center"} sx={{"@media (max-width:500px)":{
          fontSize:"13px",
          margin:"10px 0px 15px 0px",
        }}}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet enim ipsum at voluptas excepturi dignissimos ullam ut. Doloribus at tenetur laborum mollitia consequatur ab ullam! Tempore facilis non similique beatae dolores officia, adipisci perferendis laborum corrupti optio, expedita nemo repellat.
        </Typography>
        <Stack direction="row" spacing={2} marginTop={"15px"}>
        <Button variant='contained' sx={{backgroundColor:"purple",color:"white",":hover":{backgroundColor:"rgb(98, 58, 98)"}}}
        onClick={()=>window.open(`${e.url}`, `_blank`)}
        >GitHub</Button>
        <Button variant='outlined' sx={{border:"2px solid purple",color:"white",":hover":{border:"2px solid rgb(98, 58, 98)"}}}>Demo</Button>
        </Stack>
    </ProjectContainer>
  )
}

export default Project
