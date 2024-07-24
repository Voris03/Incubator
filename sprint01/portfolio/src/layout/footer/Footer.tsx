import React from "react";
import styled from "styled-components";
import Icon from "../../components/Icon/icon";
import FlexWrapper from "../../components/FlexWrapper";

const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Vladimir</Name>
                <SocialList>

                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId="insta"/>
                        </SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId="telega"/>
                        </SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId="vk"/>
                        </SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId="linkin"/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2024 Vladimir Vidus, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer` 
    background-color: #1F1F20;

`

const Name = styled.span`

`

const SocialItem = styled.li`

`

const SocialList = styled.ul`
    display: flex;
    gap: 30px;

`

const SocialLink = styled.a`

`

const Copyright = styled.small`

`

export default Footer;