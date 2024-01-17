import styled from '@emotion/styled'
import {Typography } from '@mui/material'
import React from 'react'
import { skillData, tools } from '../data'
import Skill from './Skill'
import { FaTools } from "react-icons/fa";

const Conatiner = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
// border:2px solid red;
margin-top:100px;
`
const SkillsWrapper = styled.div`
display:flex;
flex-wrap:wrap;
gap:40px;
width:80%;
margin-top:30px;
align-items:center;
justify-content:center;
margin-bottom:20px;
`
const ToolWrapper = styled.div`
display:flex;
flex-wrap:wrap;
gap:40px;
width:80%;
margin-top:30px;
align-items:center;
justify-content:center;
margin-bottom:20px;
margin-top:80px;
flex-direction:column;
`

const Skills = () => {
  return (
    <Conatiner>
        <Typography variant='h4' marginTop={"2px"}>
        Proficiencies <span style={{color:"purple"}}>In</span>
        </Typography>
        {/* <Typography variant='h6' color={"purple"}>
        Equipped with a diverse skill set, I am poised to deliver impactful solutions and contribute effectively to your projects
        </Typography> */}
        <SkillsWrapper>
            {
                skillData.map((e,i)=>{
                    return (
                        <Skill e={e} key={i} />
                    )
                })
            }
        </SkillsWrapper>
        <Typography variant='h4' marginTop={"50px"} sx={{"@media (max-width:500px)":{
            fontSize:"22px"
        }}}>Hands on Tools <FaTools style={{color:"grey"}}/></Typography>
            <SkillsWrapper>
            {
                tools.map((e,i)=>{
                    return (
                        <Skill e={e} key={i} />
                    )
                })
            }
        </SkillsWrapper>
    </Conatiner>
  )
}

export default Skills
