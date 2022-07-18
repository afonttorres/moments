import React from "react";
import { TitleRow, FeedImg, LikesSavesFeed } from "../../components/Feeds/Feed.styled";
import { MainTitle, View } from "../../pages/Styles.styled";

export const VLikesAndSaves = ({ moments, adj }) => {

    return (
        <View>
            <TitleRow>
                <MainTitle>Your {adj} moments</MainTitle>
            </TitleRow>
            <LikesSavesFeed>
                {moments.map((moment, key) => (
                    <FeedImg imgUrl={moment.imgUrl} />
                )).reverse()}
            </LikesSavesFeed>
        </View>
    )
}