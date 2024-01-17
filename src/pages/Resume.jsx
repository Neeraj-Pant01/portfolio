import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react'

const Container = styled.div`
// border:2px solid red;
display:flex;
align-items:center;
justify-content:center;
min-height:100vh;
flex-direction:column;
background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url("QFNv.gif");

`
const Frame = styled.iframe`
border:2px solid red;
display:flex;
align-items:Center;
justify-content:center;
height:100%;
width:100%;
`
const ObjectContainer = styled.object`
width:600px;
height:650px;
`

const Resume = () => {
  return (
    <Container>
        {/* <Frame src='NeerajPant2024.pdf' height={"700px"} width={"500px"}/> */}
        <ObjectContainer data='NeerajPant2024.pdf' type='application/pdf' />
        <Typography color={"white"} marginTop={"10px"}>open pdf in a new tab <a style={{color:"purple"}} href="NeerajPant2024.pdf">download the PDF file.</a></Typography>
    </Container>
  )
}

export default Resume
