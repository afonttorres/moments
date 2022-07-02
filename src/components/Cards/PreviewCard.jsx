import React from "react";
import { generalServices } from "../../services/generalServices";
import { View, MainTitle, TextBold, TextCapi, TextLine, Img } from "../../pages/Styles.styled";
import { InfoRow, ImgRow, ScrollableDesc, PrevContainer, PrevNav, PreNavButtonsCol, PreNavTitleCol } from "./Cards.styled";
import { InlineInfo } from "../InlineData/InlineInfo";
import { CrossButton, TickButton } from "../Buttons";

export const PreviewCard = (props) => {

    return (
        <View>
            <PrevContainer>
                <PrevNav border={'1px solid var(--border-color)'}>
                    <PreNavButtonsCol>
                        <CrossButton action={props.cancel} />
                    </PreNavButtonsCol>
                    <PreNavTitleCol>
                        <MainTitle>{generalServices.capitalize(props.title)} moment</MainTitle>
                    </PreNavTitleCol>
                    <PreNavButtonsCol>
                        <TickButton action={props.confirm} />
                    </PreNavButtonsCol>
                </PrevNav>
                <InfoRow>
                    <InlineInfo moment={props.moment} user={props.user} display={'none'} />
                </InfoRow>
                <ImgRow>
                    <Img imgUrl={props.moment.imgUrl} />
                </ImgRow>
                <ScrollableDesc>
                    <TextLine><TextBold>{props.user ? props.user.username : props.moment.userId.username}</TextBold>&nbsp;<TextCapi>{props.moment.description}</TextCapi></TextLine>
                </ScrollableDesc>
                <PrevNav />
            </PrevContainer>
        </View >
    )
}