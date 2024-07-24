import React from "react";
import styled from "styled-components";

type WorkPropsType = {
    title: string,
    text: string,
    src: string
}

const Work = (props: WorkPropsType) => {
    return(
        <StyledWork>
            <Image src={props.src} alt="" />
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href="#">demo</Link>
            <Link href="#">code</Link>
        </StyledWork>
    )
}

const StyledWork = styled.div`
    background-color: #252527;
    max-width: 540px;
    width: 100%;
`

const Image = styled.img`
    width: 100%;
    height: 260px;
`

const Link = styled.a`

`

const Title = styled.h3`

`

const Text = styled.p`

`

export default Work