import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import styled from "styled-components";
import Icon from "../../../components/Icon/icon";
import Slider from "../../../components/slider/Slider";
import FlexWrapper from "../../../components/FlexWrapper";

const Testimony = () => {
    return(
        <StyledTestimony >
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={"column"} align={"center"}>
                <Icon iconId="quote"/>
                <Slider/>
            </FlexWrapper>
        </StyledTestimony>

    )
}

const StyledTestimony = styled.section`
    background-color: #252527;
`

export default Testimony