import React from "react";
import { Col, Text, DetailText, TextBold } from "../../pages/Styles.styled";
import { Nav } from "../Navs/Nav";
import { Avatar } from "../Avatar/Avatar";
import { BurgerContainer, ButtonsRow, DescRow, DataRow, AvatarContainer, Banner, HeaderContainer, UsernameTitle } from "./Header.styled";
import { BgButton, NoBgButton } from "../Buttons/Buttons.styled";
import { PBurgerButton } from "../Buttons";
import { useLocation } from 'react-router-dom';
import { useState } from "react";

export const Header = (props) => {

    const [location, setLocation] = useState(useLocation(0).pathname);

    const content = {
        buttons:
        {
            follow: { content: 'follow', action: () => console.log('follow not implemented yet') },
            message: { content: 'message', action: () => console.log('message not implemented yet') }
        }
    }

    return (
        <HeaderContainer>
            <Banner imgUrl={props.user.bannerUrl}>
                {location.includes('profile') ? <Nav user={props.user} /> : <UsernameTitle>{props.user.username}</UsernameTitle>}
            </Banner>
            <AvatarContainer>
                <Avatar user={props.user} width={'95%'} />
            </AvatarContainer>
            {props.user.logged ?
                <BurgerContainer>
                    <PBurgerButton />
                </BurgerContainer>
                :
                null
            }
            <Col>
                <DataRow>
                    <Col><Text>{props.user.followers}</Text><DetailText>Followers</DetailText></Col>
                    <Col></Col>
                    <Col><Text>{props.user.following}</Text><DetailText>Following</DetailText></Col>
                </DataRow>
                <DescRow>
                    <Col>
                        <TextBold style={{ textTransform: 'capitalize' }}> {props.user.name}</TextBold>
                        <DetailText>{props.user.description ? props.user.description.substring(0, 100) : 'Go to settings to update your profile!'}</DetailText>
                    </Col>
                </DescRow>
                <ButtonsRow>
                    <BgButton div={'2.5'} onClick={content.buttons.follow.action}>{content.buttons.follow.content}</BgButton>
                    <NoBgButton div={'2.5'} onClick={content.buttons.message.action} >{content.buttons.message.content}</NoBgButton>
                </ButtonsRow>
            </Col>
        </HeaderContainer>
    )
}