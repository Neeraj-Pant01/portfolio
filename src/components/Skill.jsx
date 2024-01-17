import styled from '@emotion/styled'
import React from 'react'

const Container = styled.div`
display:flex;
align-items:center;
border:1px solid purple;
height:150px;
width:180px;
box-shadow:0px 0px 2px white;
cursor:pointer;
justify-content:center;
border-radius: 5px;
// border-radius: 50%;
transition: .3s linear all;
flex-direction:column;

@media screen and (max-width: 450px) {
  height:120px;
  width:120px;
}

&:hover{
box-shadow:0px 0px 6px white;
border: 0px;
transform: scale(1.1);
color:lightblue;
// color:rgb(222, 151, 222);
}
`

const Span = styled.span`
font-size:80px;

@media screen and (max-width: 450px){
  font-size:50px;
}
`

const Skill = ({e}) => {
  return (
    <Container>
      <Span>{<e.logo />}</Span>
      <span>{e.name}</span>
    </Container>
  )
}

export default Skill
