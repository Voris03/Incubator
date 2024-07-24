import React from "react";
import styled from "styled-components";
import FlexWrapper from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import Skill from "./skill/Skill";

const Skills = () => {
    return(
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify="space-between">
                <Skill 
                    iconId={"html"} 
                    title={"HTML5"} 
                    description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>

                <Skill 
                    iconId={"css"} 
                    title={"CSS3"} 
                    description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>

                <Skill 
                    iconId={"react"} 
                    title={"REACT"} 
                    description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>

                <Skill 
                    iconId={"typescript"} 
                    title={"TYPESCRIPT"} 
                    description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>

                <Skill 
                    iconId={"styled-components"} 
                    title={"STYLED COMPONENTS"} 
                    description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>

                <Skill 
                    iconId={"figma"} 
                    title={"WEB DESIGN"} 
                    description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
            </FlexWrapper>
        </StyledSkills>
    )
}

const StyledSkills = styled.section`
    background-color: #252527;
    min-height: 100vh;
`

export default Skills