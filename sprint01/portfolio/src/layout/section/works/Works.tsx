import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import Menu from "../../../components/menu/menu";
import FlexWrapper from "../../../components/FlexWrapper";
import socialImg from "../../../assets/images/project1.webp"
import timerImg from "../../../assets/images/project2.webp"
import Work from "./work/Work";

const worksItems = ["All", "Landing Page", "React", "SPA"]
 
const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper justify="space-around">
                <Work 
                    title={"Social Network"}
                    src={socialImg}
                    text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}

                />

                <Work
                    title={"Timer"}
                    src={timerImg}
                    text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                />
            </FlexWrapper>
        </StyledWorks>
    )
}

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: #1F1F20;
`
 
export default Works