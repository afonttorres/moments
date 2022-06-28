import React from "react";
import { Col, Text, DetailText, TextBold } from "../../pages/Styles.styled";
import { Nav } from "../Navs/Nav";
import { Avatar } from "../Avatar/Avatar";
import { ButtonsRow, DescRow, DataRow, AvatarContainer, Banner, HeaderContainer } from "./Header.styled";
import { BgButton, NoBgButton } from "../Buttons/Buttons.styled";
import { generalServices } from "../../services/generalServices";

export const Header = (props) => {

    const content = {
        imgUrl: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80',
        followers: '43.5k',
        following: '537',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        buttons: {follow: {content: 'follow', action: ()=>console.log('follow not implemented yet')}, message: {content: 'message', action: ()=>console.log('message not implemented yet')}}
    }

    return (
        <HeaderContainer>
            <Banner imgUrl={content.imgUrl}>
                <Nav isLogged={true} />
            </Banner>
            <AvatarContainer>
                <Avatar data={props.user} />
            </AvatarContainer>
            <Col>
                <DataRow>
                    <Col><Text>{content.followers}</Text><DetailText>Followers</DetailText></Col>
                    <Col></Col>
                    <Col><Text>{content.following}</Text><DetailText>Following</DetailText></Col>
                </DataRow>
                <DescRow>
                    <Col>
                        <TextBold>{generalServices.capitalizeName(props.user.name)}</TextBold>
                        <DetailText>{content.description}</DetailText>
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