import React from "react";
import { generalServices } from "../../services/generalServices";
import { View, MainTitle, TextBold, TextCapi, TextLine, Img } from "../../pages/Styles.styled";
import { InfoRow, ImgRow, TitleRow, PrevContainer, PrevNav, PreNavButtonsCol, PreNavTitleCol } from "./Cards.styled";
import { InlineInfo } from "../InlineData/InlineInfo";
import { CrossButton, TickButton } from "../Buttons";
export const PreviewCard = (props) => {

    return (
        <View>
            <PrevContainer>
                <PrevNav border={'1px solid var(--border-color)'}>
                    <PreNavButtonsCol>
                        <CrossButton action={props.cancel}/>
                    </PreNavButtonsCol>
                    <PreNavTitleCol>
                        <MainTitle>Update moment</MainTitle>
                    </PreNavTitleCol>
                    <PreNavButtonsCol>
                        <TickButton action={props.confirm}/>
                    </PreNavButtonsCol>
                </PrevNav>
                <InfoRow>
                    <InlineInfo moment={props.moment} display={'none'} />
                </InfoRow>
                <ImgRow>
                    <Img imgUrl={props.moment.imgUrl}/>
                </ImgRow>
                <TitleRow>
                    <TextLine><TextBold>{props.moment.user}</TextBold>&nbsp;<TextCapi>{generalServices.capitalize(props.moment.description)}</TextCapi></TextLine>
                </TitleRow>
                <PrevNav />
            </PrevContainer>
        </View >
    )
}