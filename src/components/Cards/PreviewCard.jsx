import React from "react";
import { formatUtil } from "../../utils/format";
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
                        <MainTitle>{formatUtil.capitalize(props.title)} moment</MainTitle>
                    </PreNavTitleCol>
                    <PreNavButtonsCol>
                        <TickButton action={props.confirm} />
                    </PreNavButtonsCol>
                </PrevNav>
                <InfoRow>
                    <InlineInfo moment={props.moment} user={props.moment.creator} display={'none'} />
                </InfoRow>
                <ImgRow>
                    <Img imgUrl={props.moment.imgUrl} />
                </ImgRow>
                <ScrollableDesc>
                    <TextLine><TextBold>{props.moment.creator.username}</TextBold>&nbsp;<TextCapi>{props.moment.description}</TextCapi></TextLine>
                </ScrollableDesc>
                <PrevNav />
            </PrevContainer>
        </View >
    )
}