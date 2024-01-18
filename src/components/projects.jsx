import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react'
import { AllProjects } from '../data'
import Project from './Project'

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
min-height:100vh;
// border:1.3px solid red;
flex-direction:column;
margin-top:200px;

@media screen and (max-width:450px){
  margin-top:160px;
}
`
const ProjectsWrapper = styled.div`
padding:50px 0px;
width:90%;
display:flex;
align-items:center;
// justify-content:space-between;
justify-content:center;
// border:2px solid yellow;
flex-wrap:wrap;
gap:50px;
row-gap:100px;

@media screen and (max-width:500px){
  row-gap:50px;
}
`

const projects = () => {
  return (
    <Container id='projects'>
        <Typography variant='h4' >PROJECT GALLERY</Typography>
        <Typography fontSize={"18px"} color={"rgb(98, 58, 98)"} width={"800px"} textAlign={"center"} sx={{"@media (max-width:500px)":{
          fontSize:"14px",
          // border:"1px solid red",
          width:"300px"
        }}}>"Step into my project gallery, where I showcase powerful demonstrations. These are just a glimpse – there's so much more to explore."</Typography>
        <ProjectsWrapper>
            {
                AllProjects.map((e,i)=><Project e={e} key={e.name}/>)
            }
        </ProjectsWrapper>
    </Container>
  )
}

export default projects
