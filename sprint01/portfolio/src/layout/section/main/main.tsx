import React from "react";
import styled from "styled-components";
import main from "../../../assets/images/ava.webp"
import FlexWrapper from "../../../components/FlexWrapper";

const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper justify={"space-around"}>
                <FlexWrapper align={"left"} direction={"column"} justify={"center"}>
                    <span>Hi There!</span>
                    <span>I am Vladimir Vidus</span>
                    <MainTitle>A Web Developer. </MainTitle>
                </FlexWrapper>
                <PhotoStyled src= {main} alt="" />
            </FlexWrapper>
        </StyledMain>
    )
}

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #1F1F20;
`
 
const PhotoStyled = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`

const MainTitle = styled.h1`

`

export default Main