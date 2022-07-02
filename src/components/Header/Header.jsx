import React from "react";
import { Col, Text, DetailText, TextBold } from "../../pages/Styles.styled";
import { Nav } from "../Navs/Nav";
import { Avatar } from "../Avatar/Avatar";
import { BurgerContainer, ButtonsRow, DescRow, DataRow, AvatarContainer, Banner, HeaderContainer } from "./Header.styled";
import { BgButton, NoBgButton } from "../Buttons/Buttons.styled";
import { generalServices } from "../../services/generalServices";
import { PBurgerButton } from "../Buttons";
import { useEffect } from "react";

export const Header = (props) => {


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
                <Nav user={props.user} />
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
                        <TextBold>{generalServices.capitalizeName(props.user.name)}</TextBold>
                        <DetailText>{props.user.description.length < 100 ? props.user.description : props.user.description.substring(0, 100)}</DetailText>
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